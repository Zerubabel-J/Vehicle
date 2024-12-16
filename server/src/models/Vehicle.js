const mongoose = require("mongoose");

const VehicleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, enum: ["active", "inactive"], default: "active" },
  lastUpdated: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Vehicle", VehicleSchema);
