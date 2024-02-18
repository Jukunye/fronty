import { Avatar, Box, Typography, useTheme } from "@mui/material";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Link, useLocation } from "react-router-dom";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import ScaleOutlinedIcon from "@mui/icons-material/ScaleOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import OilBarrelOutlinedIcon from "@mui/icons-material/OilBarrelOutlined";
function SideNav() {
  const theme = useTheme();
  const { collapsed } = useProSidebar();
  const location = useLocation();
  return (
    <Sidebar
      style={{
        height: "100%",
        top: "auto",
      }}
      breakPoint="md"
      backgroundColor={theme.palette.neutral.light}
    >
      {/* <Box sx={styles.avatarContainer}>
        <Avatar
          sx={styles.avatar}
          alt="Channel Name"
          src="https://avatars.githubusercontent.com/u/122859193?v=4"
        />
        {!collapsed ? (
          <Typography variant="body2" sx={styles.yourChannel}>
            Your Channel
          </Typography>
        ) : null}
        {!collapsed ? (
          <Typography variant="overline">React with meus</Typography>
        ) : null}
      </Box> */}
      <Menu
        menuItemStyles={{
          button: ({ active }) => {
            return {
              backgroundColor: active
                ? theme.palette.neutral.medium
                : undefined,
            };
          },
        }}
      >
        <MenuItem
          active={location.pathname === "/"}
          component={<Link to="/" />}
          icon={<DashboardOutlinedIcon style={{ color: "#f73378" }} />}
        >
          <Typography variant="body2">Dashboard</Typography>
        </MenuItem>
        <MenuItem
          active={location.pathname === "/trucks"}
          component={<Link to="/trucks" />}
          icon={<LocalShippingOutlinedIcon style={{ color: "#834bff" }} />}
        >
          <Typography variant="body2">Trucks</Typography>
        </MenuItem>
        <MenuItem
          active={location.pathname === "/weighbridgein"}
          component={<Link to="/weighbridgein" />}
          icon={<ScaleOutlinedIcon style={{ color: "#5393ff" }} />}
        >
          <Typography variant="body2">Weighbridge In</Typography>
        </MenuItem>
        <MenuItem
          active={location.pathname === "/lab"}
          component={<Link to="/lab" />}
          icon={<ScienceOutlinedIcon style={{ color: "#33eaff" }} />}
        >
          <Typography variant="body2">Lab</Typography>
        </MenuItem>
        <MenuItem
          active={location.pathname === "/tankfarm"}
          component={<Link to="/tankfarm" />}
          icon={<OilBarrelOutlinedIcon style={{ color: "#33eb91" }} />}
        >
          <Typography variant="body2">Tankfarm</Typography>
        </MenuItem>
        <MenuItem
          active={location.pathname === "/weighbridgeout"}
          component={<Link to="/weighbridgeout" />}
          icon={<ScaleOutlinedIcon style={{ color: "#ffee33" }} />}
        >
          <Typography variant="body2">Weighbridge Out</Typography>
        </MenuItem>

        <MenuItem
          active={location.pathname === "/addtruck"}
          component={<Link to="/addtruck" />}
          icon={<AddBoxIcon style={{ color: "#ff5722" }} />}
        >
          <Typography variant="body2">Add Truck</Typography>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  avatarContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    my: 5,
  },
  avatar: {
    width: "40%",
    height: "auto",
  },
  yourChannel: {
    mt: 1,
  },
};

export default SideNav;
