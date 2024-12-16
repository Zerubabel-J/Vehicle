const Vehicle = require("../models/Vehicle");

// Get fleet statistics
exports.getStatistics = async (req, res) => {
  try {
    // Total number of vehicles
    const totalVehicles = await Vehicle.countDocuments();

    // Count vehicles by status
    const activeVehicles = await Vehicle.countDocuments({ status: "active" });
    const inactiveVehicles = await Vehicle.countDocuments({
      status: "inactive",
    });

    // Get the most recently updated vehicle
    const lastUpdatedVehicle = await Vehicle.findOne().sort({
      lastUpdated: -1,
    });

    res.status(200).json({
      totalVehicles,
      activeVehicles,
      inactiveVehicles,
      lastUpdatedVehicle: lastUpdatedVehicle
        ? {
            name: lastUpdatedVehicle.name,
            status: lastUpdatedVehicle.status,
            lastUpdated: lastUpdatedVehicle.lastUpdated,
          }
        : null,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
