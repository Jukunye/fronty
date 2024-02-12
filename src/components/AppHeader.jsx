import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useProSidebar } from "react-pro-sidebar";
import AccountMenu from "./AccountMenu";

function AppHeader() {
  const { collapseSidebar, toggleSidebar, broken } = useProSidebar();
  return (
    <AppBar position="sticky" sx={styles.appBar}>
      <Toolbar>
        <IconButton
          onClick={() => (broken ? toggleSidebar() : collapseSidebar())}
          // color="primary"
        >
          <MenuIcon />
        </IconButton>
        <Box
          component="img"
          sx={styles.appLogo}
          src="https://logos-world.net/wp-content/uploads/2020/03/Coca-Cola-Logo.png"
        />
        <Box sx={{ flexGrow: 1 }} />
        <IconButton title="Notification">
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <AccountMenu />
      </Toolbar>
    </AppBar>
  );
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  appBar: {
    bgcolor: "neutral.light",
  },
  appLogo: {
    borderRadius: 2,
    width: 80,
    ml: 2,
    cursor: "pointer",
  },
};

export default AppHeader;
