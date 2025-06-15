const Buyer = require('../models/Buyer');

exports.addBuyer = async (req, res) => {
  const buyerPhoto = req.file?.filename;
  const newBuyer = new Buyer({ ...req.body, buyerPhoto });
  await newBuyer.save();
  res.json(newBuyer);
};
