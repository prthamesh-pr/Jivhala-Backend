const express = require('express');
const upload = require('../middleware/upload');
const { addVehicle, getAllVehicles, getVehicleById, updateVehicle } = require('../controllers/vehicleController');
const router = express.Router();
router.post('/add', upload.array('images', 6), addVehicle);
router.get('/', getAllVehicles);
router.get('/:id', getVehicleById);
router.put('/:id', updateVehicle);
module.exports = router;
