const DeleteConfirmationModal = ({ open, onClose, onDelete, vehicle }) => {
  const handleDelete = () => {
    onDelete(vehicle._id);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Delete Vehicle</DialogTitle>
      <DialogContent>
        Are you sure you want to delete the vehicle "{vehicle.name}"?
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleDelete} color="error">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};
