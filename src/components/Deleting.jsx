import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton, Tooltip } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import axios from "axios";

function Deleting({ truck, onDeleteSuccess }) {
  const [open, setOpen] = React.useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteData = async () => {
    try {
      setDeleteLoading(true); // Set loading to true when DELETE request starts
      const response = await axios.delete(
        `http://127.0.0.1:8000/api/truck/${truck.id}/`
      );
      // Perform any actions needed after successful delete
      onDeleteSuccess(); // Call the onDeleteSuccess callback
      setDeleteLoading(false); // Set loading to false after successful DELETE request
    } catch (error) {
      console.error("Error deleting data:", error);
      setDeleteLoading(false); // Set loading to false if there's an error
    }
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Tooltip title="Delete" onClick={handleClickOpen}>
        <IconButton>
          <DeleteOutlinedIcon />
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Please confirm."}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Warning: This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">
            Cancel
          </Button>
          <Button
            onClick={handleDeleteData}
            variant="outlined"
            startIcon={<DeleteOutlinedIcon />}
            disabled={deleteLoading}
          >
            {deleteLoading ? "Deleting..." : "Delete"}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
export default Deleting;
