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

function ViewTruck({ open, handleClose, truck }) {
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
        <Divider sx={{ mb: 1 }} />
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body1">Driver Name:</Typography>
          <Typography variant="body2" style={{ marginLeft: "8px" }}>
            {truck.driver}
          </Typography>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body1">Cab plate:</Typography>
          <Typography variant="body2" style={{ marginLeft: "8px" }}>
            {truck.cab_plate}
          </Typography>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body1">Trailer plate:</Typography>
          <Typography variant="body2" style={{ marginLeft: "8px" }}>
            {truck.trailer_plate}
          </Typography>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body1">Delivery number:</Typography>
          <Typography variant="body2" style={{ marginLeft: "8px" }}>
            {truck.general_info.delivery_number}
          </Typography>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body1">Loading date:</Typography>
          <Typography variant="body2" style={{ marginLeft: "8px" }}>
            {truck.general_info.loading_date}
          </Typography>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body1">Fuel Gauge:</Typography>
          <Typography variant="body2" style={{ marginLeft: "8px" }}>
            {truck.general_info.fuel_gauge}
          </Typography>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body1">Water reservoir:</Typography>
          <Typography variant="body2" style={{ marginLeft: "8px" }}>
            {truck.general_info.water_reservoir}
          </Typography>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body1">Number of seals:</Typography>
          <Typography variant="body2" style={{ marginLeft: "8px" }}>
            {truck.general_info.number_of_seals}
          </Typography>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body1">Seals condition:</Typography>
          <Typography variant="body2" style={{ marginLeft: "8px" }}>
            {truck.general_info.seals_condition}
          </Typography>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body1">Sealing condition:</Typography>
          <Typography variant="body2" style={{ marginLeft: "8px" }}>
            {truck.general_info.sealing_condition}
          </Typography>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body1">Officer name:</Typography>
          <Typography variant="body2" style={{ marginLeft: "8px" }}>
            {truck.general_info.officer_name}
          </Typography>
        </div>
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
