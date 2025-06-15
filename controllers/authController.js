// controllers/authController.js
const bcrypt = require('bcrypt');
const User = require('../models/user');

// Create new user (used to insert a secure user for test/demo)
exports.createTestUser = async (req, res) => {
  try {
    const { name, username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10); // 10 = salt rounds

    const newUser = new User({
      name,
      username,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating user' });
  }
};
// controllers/authController.js
exports.login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Exclude password from response
  const { password: pwd, ...userData } = user.toObject();

  res.json(userData);
};
