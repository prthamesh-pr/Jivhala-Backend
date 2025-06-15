const User = require('../models/User');

exports.updateProfile = async (req, res) => {
  const { id, name, username, password } = req.body;
  const updated = await User.findByIdAndUpdate(id, { name, username, password }, { new: true });
  res.json(updated);
};
