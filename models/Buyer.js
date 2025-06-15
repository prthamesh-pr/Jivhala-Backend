const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema({
  vehicleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' },
  buyerName: String,
  address: String,
  price: Number,
  balance: Number,
  rtoCharges: Number,
  commission: Number,
  tokenReceived: Number,
  challan: String,
  idProof: Boolean,
  aadharCard: String,
  panCard: String,
  email: String,
  outDate: Date,
  buyerPhoto: String
});

module.exports = mongoose.model("Buyer", buyerSchema);
