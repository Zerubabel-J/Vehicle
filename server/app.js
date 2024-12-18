const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./src/config/db");
const vehicleRoutes = require("./src/routes/VehicleRoutes");
const statisticsRoutes = require("./src/routes/statisticsRoutes");

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/vehicles", vehicleRoutes);
app.use("/api/statistics", statisticsRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
