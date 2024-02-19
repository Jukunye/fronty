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
import { Empty, Tag, message } from "antd";
import ViewTruck from "../../components/ViewTruck";

const Trucks = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [truck, setTruck] = useState({});
  const statusColors = {
    "Weigh in": "blue",
    Lab: "cyan",
    Tankfarm: "magenta",
    "Weigh out": "gold",
    cleared: "green",
  };

  const getStatusColor = (status) => {
    return statusColors[status] || "default";
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://54.198.64.165:8000/api/trucks/");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      minWidth: 40,
      flex: 1,
    },
    {
      field: "cab_plate",
      headerName: "Cab plate",
      minWidth: 85,
      flex: 1,
    },
    {
      field: "trailer_plate",
      headerName: "Trailer plate",
      minWidth: 90,
      flex: 1,
    },
    {
      field: "general_info.delivery_number",
      headerName: "Delivery No.",
      minWidth: 95,
      flex: 1,
      valueGetter: (params) => params.row.general_info?.delivery_number || "",
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 90,
      flex: 1,
      renderCell: (params) => (
        <Box>
          <Tag color={getStatusColor(params.row.status)}>
            {params.row.status}
          </Tag>
        </Box>
      ),
    },
    {
      field: "action",
      headerName: "Actions",
      minWidth: 100,
      flex: 1,
      renderCell: (params) => (
        <Box>
          <Tooltip title="View">
            <IconButton
              onClick={() => {
                setDialogOpen(true);
                setTruck(params.row);
              }}
            >
              <OpenInNewOutlinedIcon />
            </IconButton>
          </Tooltip>
          {dialogOpen && (
            <ViewTruck
              open={dialogOpen}
              handleClose={() => setDialogOpen(false)}
              truck={truck}
            />
          )}
          <Deleting truck={params.row} onDeleteSuccess={handleDeleteSuccess} />
        </Box>
      ),
    },
  ];

  const handleDeleteSuccess = () => {
    fetchData(); // Reload data after successful deletion
    message.success("Truck deleted");
  };

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
                  All Trucks
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
                  // checkboxSelection
                  autoHeight
                  rowHeight={50}
                  // sx={{ bgcolor: "neutral.light" }}
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
      {/* <ViewTruck
        open={dialogOpen}
        handleClose={() => setDialogOpen(false)}
        truck={truck}
      /> */}
    </div>
  );
};

export default Trucks;
