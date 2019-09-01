const router = require('express').Router();
const bcrypt = require('bcryptjs');

const User = require('../models/User');
const { registerValidation } = require('../validation');

router.post('/register', async (req, res) => {
	const { error } = registerValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const emailExist = await User.findOne({ email: req.body.email });
	if (emailExist) return res.status(400).send('Email already exists');

	const salt = await bcrypt.gentSalt(10);
	const hashPassword = await bcrypt.hash(req.body.password, salt);

	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: hashPassword
	});
	try {
		const saveUser = await user.save();
		res.send({ user: user._id });
	} catch (err) {
		res.status(400).send(err);
	}
});

router.post('/login', (req, res) => {
	res.send('Login');
});

module.exports = router;
