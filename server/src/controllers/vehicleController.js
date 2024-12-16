const Vehicle = require("../models/Vehicle");

// Fetch all vehicles
exports.getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.status(200).json(vehicles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new vehicle
exports.addVehicle = async (req, res) => {
  try {
    const vehicle = new Vehicle(req.body);
    await vehicle.save();
    res.status(201).json(vehicle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update vehicle status
exports.updateVehicle = async (req, res) => {
  const { name, status } = req.body;

  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }
    if (name) vehicle.name = name;
    if (status) vehicle.status = status;
    console.log(vehicle);
    const updatedVehicle = await vehicle.save();

    res.json({
      ...updatedVehicle.toObject(),
      updatedAt: updatedVehicle.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating vehicle", error });
  }
};

exports.deleteVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedVehicle = await Vehicle.findByIdAndDelete(id);
    if (!deletedVehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }
    res.status(200).json({ message: "Vehicle deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
