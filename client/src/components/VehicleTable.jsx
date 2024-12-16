import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Box,
  TableContainer,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const VehicleTable = ({ vehicles, onDelete, onEdit }) => {
  const [open, setOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const handleDeleteClick = (vehicle) => {
    setSelectedVehicle(vehicle);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedVehicle(null);
  };

  const confirmDelete = () => {
    if (selectedVehicle) {
      onDelete(selectedVehicle._id);
      handleClose();
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          overflowX: "auto",
        }}
      >
        <TableContainer component={Paper} sx={{ width: "100%" }}>
          <Table
            sx={{
              mt: 5,
              borderCollapse: "collapse",
              width: "100%",
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell sx={{ border: "1px solid #ddd" }}>
                  Vehicle Name
                </TableCell>
                <TableCell sx={{ border: "1px solid #ddd" }}>Status</TableCell>
                <TableCell sx={{ border: "1px solid #ddd" }}>
                  Date Updated
                </TableCell>
                <TableCell sx={{ border: "1px solid #ddd" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vehicles.map((vehicle) => (
                <TableRow key={vehicle._id}>
                  <TableCell sx={{ border: "1px solid #ddd" }}>
                    {vehicle.name}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ddd" }}>
                    {vehicle.status}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ddd" }}>
                    {new Date(vehicle.updatedAt).toLocaleString()}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ddd" }}>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 2,
                      }}
                    >
                      <Button
                        onClick={() => onEdit(vehicle)}
                        variant="contained"
                        sx={{
                          flex: 1,
                          maxWidth: "30%",
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() => handleDeleteClick(vehicle)}
                        variant="contained"
                        sx={{
                          flex: 1,
                          backgroundColor: "red",
                          maxWidth: "30%",
                        }}
                      >
                        Delete
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="confirm-dialog-title"
        aria-describedby="confirm-dialog-description"
      >
        <DialogTitle id="confirm-dialog-title">Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText id="confirm-dialog-description">
            Are you sure you want to delete the vehicle{" "}
            <strong>{selectedVehicle?.name}</strong>? This action cannot be
            undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">
            Cancel
          </Button>
          <Button
            onClick={confirmDelete}
            variant="contained"
            sx={{ backgroundColor: "red" }}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default VehicleTable;
