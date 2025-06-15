const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import the User model

// ✅ TEMP test user route
router.post('/create-test-user', async (req, res) => {
  try {
    const newUser = await User.create({
      name: "Admin",
      username: "admin",
      password: "1234"
    });
    res.json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔐 Actual login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  res.json(user);
});

module.exports = router;
