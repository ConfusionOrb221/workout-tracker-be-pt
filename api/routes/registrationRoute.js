const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const Users = require('../models/userModel');

const validateRegistration = require('../../validation/middleware/registration-middleware');
const validateLogin = require('../../validation/middleware/login-middleware');

const { generateToken } = require('../../utilities/jwt');

router.post('/register', validateRegistration, (req, res) => {
  const user = req.body;

  user.password = bcrypt.hashSync(user.password, 8);

  Users.add(user)
    .then((saved) => {
      res.status(201).json({ username: saved.username });
    })
    .catch((err) => {
      res.status(500).json({ message: 'problem with the db', error: err });
    });
});

router.post('/login', (req, res) => {
  let { email, password } = req.body;

  Users.findBy({ email })
    .then(([user]) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);

        res.status(200).json({
          message: `Welcome ${user.email}!`,
          token,
        });
        res.end()
      } else {
        res.status(401).json({
          message: 'Invalid Credentials',
        });
        res.end()
      }
    })
    .catch((err) => {
      res.status(500).json(err);
      res.end()
    });
});

module.exports = router;
