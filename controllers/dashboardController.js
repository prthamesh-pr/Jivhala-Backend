const Vehicle = require('../models/Vehicle');
const Buyer = require('../models/Buyer');

exports.getDashboardStats = async (req, res) => {
  const today = new Date().toISOString().slice(0, 10);

  const allVehicles = await Vehicle.find();
  const todayIn = await Vehicle.countDocuments({ inDate: { $gte: new Date(today), $lt: new Date(`${today}T23:59:59.999Z`) } });
  const todayOut = await Buyer.countDocuments({ outDate: { $gte: new Date(today), $lt: new Date(`${today}T23:59:59.999Z`) } });
  const totalVehicles = allVehicles.length;

  res.json({ todayIn, todayOut, totalVehicles, allVehicles });
};
