import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function SignIn() {
  const signIn = useSignIn();
  let navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      const response = await axios.post(
        "http://54.198.64.165:8000/api/auth/login/",
        {
          username: data.get("username"),
          password: data.get("password"),
        }
      );

      if (response.status === 200) {
        if (
          signIn({
            auth: {
              token: response.data.token,
              type: "Bearer",
            },
            refresh: response.data.refreshToken,
            userState: response.data.authUserState,
          })
        ) {
          navigate("success");
        }
      }

      // // Handle successful login
      // const token = response.data.token;
      // console.log(token);

      // // Store the token in local storage
      // localStorage.setItem("token", token);

      // // Redirect the user
      window.location.href = "/"; // Redirect to the dashboard or any other desired route
    } catch (error) {
      // Handle login error
      console.error("Login failed:", error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Box
          component="img"
          sx={styles.appLogo}
          src="https://github.com/Shadkoech/Kibhoret_LandingPage/blob/master/landing_page/src/Assets/Logo.png?raw=true"
        />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  appLogo: {
    borderRadius: 2,
    width: 180,
    mb: 5,
    cursor: "pointer",
  },
};

export default SignIn;
