import {
  Box,
  Grid,
  Typography,
  Container,
  CircularProgress,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import { OverviewBox } from "../../components/OverviewBox";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import ScaleOutlinedIcon from "@mui/icons-material/ScaleOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import OilBarrelOutlinedIcon from "@mui/icons-material/OilBarrelOutlined";
import AddBoxIcon from "@mui/icons-material/AddBox";
import axios from "axios";

function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://54.198.64.165:8000/api/dashboard/"
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="50vh"
        >
          <CircularProgress color="success" />
        </Box>
      ) : (
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8,
          }}
        >
          <Container maxWidth="xl">
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12} sm={6} lg={4}>
                <Link
                  to="/trucks"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <OverviewBox
                    sx={{ height: "100%" }}
                    value={data.all_trucks}
                    avcolor="#834bff"
                    title={"All Trucks"}
                    icon={<LocalShippingOutlinedIcon />}
                  />
                </Link>
              </Grid>
              <Grid item xs={12} sm={6} lg={4}>
                <Link
                  to="/weighbridgein"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <OverviewBox
                    sx={{ height: "100%" }}
                    value={data.weigh_in_trucks}
                    avcolor="#5393ff"
                    title={"Weighbridge In"}
                    icon={<ScaleOutlinedIcon />}
                  />
                </Link>
              </Grid>
              <Grid item xs={12} sm={6} lg={4}>
                <Link
                  to="/lab"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <OverviewBox
                    sx={{ height: "100%" }}
                    value={data.qc_trucks}
                    avcolor="#33eaff"
                    title={"Quality Control"}
                    icon={<ScienceOutlinedIcon />}
                  />
                </Link>
              </Grid>
              <Grid item xs={12} sm={6} lg={4}>
                <Link
                  to="/tankfarm"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <OverviewBox
                    sx={{ height: "100%" }}
                    value={data.tankfarm_trucks}
                    avcolor="#f73378"
                    title={"Offloading Bay"}
                    icon={<OilBarrelOutlinedIcon />}
                  />
                </Link>
              </Grid>
              <Grid item xs={12} sm={6} lg={4}>
                <Link
                  to="/weighbridgeout"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <OverviewBox
                    sx={{ height: "100%" }}
                    value={data.weigh_out_trucks}
                    avcolor="#ffee33"
                    title={"Weighbridge Out"}
                    icon={<ScaleOutlinedIcon />}
                  />
                </Link>
              </Grid>
              <Grid item xs={12} sm={6} lg={4}>
                <Link
                  to="/addtruck"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <OverviewBox
                    sx={{ height: "100%" }}
                    value="+"
                    avcolor="#33eb91"
                    title={"Add New"}
                    icon={<AddBoxIcon />}
                  />
                </Link>
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
    </div>
  );
}

export default Dashboard;
