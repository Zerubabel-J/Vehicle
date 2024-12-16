import React, { useEffect, useState } from "react";
import { fetchVehicles, deleteVehicle, updateVehicle } from "../services/api";
import VehicleTable from "../components/VehicleTable";
import AddVehicleForm from "../components/AddVehicleForm";
import { Box, Container, Modal, Typography } from "@mui/material";
import UpdateVehicleForm from "../components/UpdateVehicleForm";
import Loader from "../components/Loader";

const Dashboard = () => {
  const [vehicles, setVehicles] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [currentVehicle, setCurrentVehicle] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const vehicleData = await fetchVehicles();
      setVehicles(vehicleData);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteVehicle(id);
      loadData();
    } catch (error) {
      console.error("Error deleting vehicle:", error);
    }
  };

  const handleUpdate = async (id, updatedVehicle) => {
    try {
      await updateVehicle(id, updatedVehicle);
      loadData();
      setOpenModal(false);
    } catch (error) {
      console.error("Error updating vehicle:", error);
    }
  };

  const handleOpenModal = (vehicle) => {
    setCurrentVehicle(vehicle);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setCurrentVehicle(null);
  };

  return (
    <Container>
      <AddVehicleForm loadData={loadData} />
      {vehicles.length === 0 && <Loader />}

      <VehicleTable
        vehicles={vehicles}
        onDelete={handleDelete}
        onEdit={handleOpenModal}
      />
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="edit-vehicle-modal"
        aria-describedby="edit-vehicle-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography variant="h6">Edit Vehicle</Typography>
          {currentVehicle && (
            <UpdateVehicleForm
              initialData={currentVehicle}
              onVehicleUpdated={handleUpdate}
              onCancel={handleCloseModal}
            />
          )}
        </Box>
      </Modal>
    </Container>
  );
};

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export default Dashboard;
