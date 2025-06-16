const Vehicle = require('../models/Vehicle');

exports.addVehicle = async (req, res) => {
  try {
    const images = req.files ? req.files.map(file => file.filename) : [];
    const newVehicle = new Vehicle({ ...req.body, images });
    await newVehicle.save();
    res.status(201).json(newVehicle);
  } catch (err) {
    console.error('Error in addVehicle:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch vehicles' });
  }
};

exports.getVehicleById = async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle) return res.status(404).json({ message: 'Vehicle not found' });
    res.json(vehicle);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching vehicle' });
  }
};

exports.updateVehicle = async (req, res) => {
  try {
    const updated = await Vehicle.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update vehicle' });
  }
};
