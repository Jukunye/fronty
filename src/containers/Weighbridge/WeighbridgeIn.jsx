import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import {
  Box,
  CircularProgress,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import Deleting from "../../components/Deleting";
import { Link } from "react-router-dom";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Empty } from "antd";
import ViewTruck from "../../components/ViewTruck";

const weighbridgeIn = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleEdit = (params) => {
    console.log(params.row);
  };

  const columns = [
    {
      field: "driver",
      headerName: "Driver",
      minWidth: 170,
      flex: 1,
    },
    {
      field: "cab_plate",
      headerName: "Cab plate",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "trailer_plate",
      headerName: "Trailer plate",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "",
      headerName: "Actions",
      minWidth: 170,
      flex: 1,
      renderCell: (params) => (
        <Box>
          <Tooltip title="Edit truck">
            <Link to="/addtruck" state={{ number: 1, truck: params.row }}>
              <IconButton>
                <EditOutlinedIcon />
              </IconButton>
            </Link>
          </Tooltip>
          <Tooltip title="View">
            <IconButton onClick={() => setDialogOpen(true)}>
              <OpenInNewOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/weighbridge/in/"
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
        <div>
          {data && data.total_trucks !== 0 ? (
            <Box sx={{ my: 2 }}>
              <Paper elevation={2}>
                <Typography variant="h6" sx={{ pt: 2, ml: 2 }}>
                  Weighbridge In
                </Typography>
                <Typography
                  variant="caption"
                  display="block"
                  sx={{ ml: 2, mb: 3 }}
                >
                  {data.total_trucks} in progress.
                </Typography>
                <DataGrid
                  rows={data.all_trucks}
                  columns={columns}
                  pageSize={25}
                  rowsPerPageOptions={[25]}
                  autoHeight
                  rowHeight={50}
                />
              </Paper>
            </Box>
          ) : (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="50vh"
            >
              <Empty description={<span>No Trucks Available</span>} />
            </Box>
          )}
        </div>
      )}
      {/* Render the FullScreenDialog component */}
      <ViewTruck open={dialogOpen} handleClose={() => setDialogOpen(false)} />
    </div>
  );
};

export default weighbridgeIn;
