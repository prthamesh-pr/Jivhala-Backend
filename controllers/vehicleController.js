const Vehicle = require('../models/Vehicle');

exports.addVehicle = async (req, res) => {
  const images = req.files.map(file => file.filename);
  const newVehicle = new Vehicle({ ...req.body, images });
  await newVehicle.save();
  res.json(newVehicle);
};

exports.getAllVehicles = async (req, res) => {
  const vehicles = await Vehicle.find();
  res.json(vehicles);
};

exports.getVehicleById = async (req, res) => {
  const vehicle = await Vehicle.findById(req.params.id);
  res.json(vehicle);
};

exports.updateVehicle = async (req, res) => {
  const updated = await Vehicle.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};
