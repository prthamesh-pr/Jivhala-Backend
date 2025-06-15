const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  vehicleNumber: String,
  vehicleHp: String,
  chassisNumber: String,
  engineNumber: String,
  vehicleName: String,
  ownerName: String,
  mobileNumber: String,
  challan: String,
  inDate: Date,
  modelYear: Number,
  vehicleType: String,
  firstChecked: Boolean,
  secondChecked: Boolean,
  thirdChecked: Boolean,
  insuranceDate: Date,
  rc: Boolean,
  puc: Boolean,
  noc: Boolean,
  images: [String]
});

module.exports = mongoose.model("Vehicle", vehicleSchema);
