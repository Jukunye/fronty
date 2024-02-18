import { Box, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import React, { useState } from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import theme from "./config/theme";
import SideNav from "./components/SideNav";
import AppHeader from "./components/AppHeader";
import { ProSidebarProvider } from "react-pro-sidebar";
import AppRoutes from "./router/AppRoutes";
import { useLocation } from "react-router-dom";
import createStore from "react-auth-kit/createStore";
import AuthProvider, { useAuthStatus } from "react-auth-kit/AuthProvider";

function App() {
  const location = useLocation();
  const [isSidebar, setIsSidebar] = useState(true);
  const store = createStore({
    authName: "_auth",
    authType: "cookie",
    cookieDomain: window.location.hostname,
    cookieSecure: "false",
  });

  const isLoggedIn = useAuthStatus;
  const isLoginPage = location.pathname === "/Login";

  // console.log(location.pathname);
  // console.log(isLoginPage);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <ProSidebarProvider>
          <CssBaseline />
          <AuthProvider store={store}>
            {!isLoginPage && <AppHeader />}
            <Box
              sx={{
                ...styles.container,
                height: isLoginPage ? "100%" : "calc(100% - 64px)",
              }}
            >
              {!isLoginPage && <SideNav />}
              <Box component={"main"} sx={styles.mainSection}>
                <AppRoutes />
              </Box>
            </Box>
          </AuthProvider>
        </ProSidebarProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  container: {
    display: "flex",
    bgcolor: "neutral.medium",
    // height: "calc(100% - 64px)",
  },
  mainSection: {
    p: 1,
    width: "100%",
    height: "100%",
    overflow: "auto",
  },
};

export default App;
