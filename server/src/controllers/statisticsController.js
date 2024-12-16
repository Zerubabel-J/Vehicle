const Vehicle = require("../models/Vehicle");

exports.getStatistics = async (req, res) => {
  try {
    const totalVehicles = await Vehicle.countDocuments();

    const activeVehicles = await Vehicle.countDocuments({ status: "active" });
    const inactiveVehicles = await Vehicle.countDocuments({
      status: "inactive",
    });

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
