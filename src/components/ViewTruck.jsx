import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ViewTruck({ open, handleClose }) {
  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Truck Information
            </Typography>
          </Toolbar>
        </AppBar>
        <Typography variant="h5">General Information</Typography>
        <Divider />
        <Typography variant="subtitle2">Driver name:</Typography>
        <div
          style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}
        >
          <Typography variant="subtitle2">Cab plate</Typography>
          <Typography variant="subtitle1" style={{ marginLeft: "8px" }}>
            {"KBJ 899Y"}
          </Typography>
        </div>

        <div
          style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}
        >
          <Typography variant="subtitle2">Trailer plate</Typography>
          <Typography variant="subtitle1" style={{ marginLeft: "8px" }}>
            {"KBJ 899Y"}
          </Typography>
        </div>
        <Typography>Delivery number</Typography>
        <Typography>Loading date</Typography>
        <Typography>Fuel Guage</Typography>
        <Typography>Water reservoir</Typography>
        <Typography>Number of seals</Typography>
        <Typography>Seals condition</Typography>
        <Typography>Sealing condition</Typography>
        <Typography>Officer name</Typography>
        <Typography variant="h5">Weighbridge In</Typography>
        <Divider />
        <Typography variant="h5">Quaity Control</Typography>
        <Divider />
        <Typography variant="h5">Tankfarm</Typography>
        <Divider />
        <Typography variant="h5">Weighbridge Out</Typography>
      </Dialog>
    </React.Fragment>
  );
}

export default ViewTruck;
