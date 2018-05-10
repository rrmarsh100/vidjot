const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

//user login route
router.get('/login', (req, res) => {
  res.render('users/login');
});

//User Register Route
router.get('/register', (req, res) => {
  res.render('users/register');
});

module.exports = router;