const express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('../config/passport');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// Register (email/password)
router.post('/register', [
  body('email').isEmail().withMessage('A valid email is required.'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters.'),
  body('name').notEmpty().withMessage('Name is required.')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { email, password, name } = req.body;
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: 'Email already in use.' });
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hash, name });
    req.login(user, (err) => {
      if (err) return res.status(500).json({ message: 'Login after register failed.' });
      res.json({ user: { id: user._id, email: user.email, name: user.name } });
    });
  } catch (err) {
    res.status(500).json({ message: 'Registration failed.', error: err.message });
  }
});

// Login (email/password)
router.post('/login', [
  body('email').isEmail().withMessage('A valid email is required.'),
  body('password').notEmpty().withMessage('Password is required.')
], (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(400).json({ message: info ? info.message : 'Login failed.' });
    req.login(user, (err) => {
      if (err) return next(err);
      res.json({ user: { id: user._id, email: user.email, name: user.name } });
    });
  })(req, res, next);
});

// Logout
router.post('/logout', (req, res) => {
  req.logout(() => {
    res.json({ message: 'Logged out' });
  });
});

// Get current user
router.get('/me', (req, res) => {
  if (!req.user) return res.status(401).json({ user: null });
  res.json({ user: { id: req.user._id, email: req.user.email, name: req.user.name } });
});

// Google OAuth
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', {
  failureRedirect: '/login',
  session: true,
}), (req, res) => {
  // Redirect to frontend after successful login
  res.redirect(process.env.CLIENT_URL || 'http://localhost:3000');
});

module.exports = router; 