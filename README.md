# node-auth-api
A basic authentication API built with Express and JWT

## Installation:

To get started, clone the node-auth-api repo and go into the folder:

```
git clone https://github.com/mikefmeyer/node-auth-api
cd node-auth-api/
npm install
```

### Configuration:

To get started with the API:

Create and .env file:

```
DB_CONNECT = mongo_db link comes here
TOKEN_SECRET = random secret key comes here
```

## Using the API:

The /register route is used to register a new user.

```
name: user name comes here,
email: user email comes here,
password: user password comes here
```

The /login route is used to login a user.

```
email: user email comes here,
password: user password comes here
```

## Protecting routes:

Just add the token function as middleware to any route.
Example route:

```
const router = require('express').Router();
const verify = require('token');

router.get('/admin', verify, (req, res) => {
  res.json({ content: 'hidden content' });
 });
 
 module.exports = router;
 ```
