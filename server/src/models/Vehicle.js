const mongoose = require("mongoose");

const VehicleSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    status: { type: String, enum: ["Active", "Inactive"], default: "Active" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vehicle", VehicleSchema);
