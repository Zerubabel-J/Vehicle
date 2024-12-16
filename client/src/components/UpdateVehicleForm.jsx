import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Snackbar,
  Alert,
} from "@mui/material";

const UpdateVehicleForm = ({ onVehicleUpdated, initialData, onCancel }) => {
  const [vehicle, setVehicle] = useState({
    name: "",
    status: "Active",
  });
  const [successMessage, setSuccessMessage] = useState(false);

  useEffect(() => {
    if (initialData) {
      setVehicle(initialData);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      onVehicleUpdated(vehicle._id, vehicle);

      setTimeout(() => {
        setSuccessMessage("Vehicle updated successfully!");
      }, 1000);

      setVehicle(initialData);
    } catch (error) {
      console.error("Error updating vehicle:", error);
    }
  };

  const handleSnackbarClose = () => {
    setSuccessMessage(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxWidth: 500,
          alignItems: "center",
          margin: "auto",
        }}
      >
        <TextField
          label="Vehicle Name"
          variant="outlined"
          value={vehicle.name}
          onChange={(e) => setVehicle({ ...vehicle, name: e.target.value })}
          fullWidth
          required
        />

        <FormControl fullWidth required>
          <InputLabel>Status</InputLabel>
          <Select
            value={vehicle.status}
            onChange={(e) => setVehicle({ ...vehicle, status: e.target.value })}
            label="Status"
          >
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Inactive">Inactive</MenuItem>
          </Select>
        </FormControl>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button type="submit" variant="contained">
            Update Vehicle
          </Button>
          {onCancel && (
            <Button variant="outlined" onClick={onCancel}>
              Cancel
            </Button>
          )}
        </Box>
      </Box>

      <Snackbar
        open={!!successMessage}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          {successMessage}
        </Alert>
      </Snackbar>
    </form>
  );
};

export default UpdateVehicleForm;
