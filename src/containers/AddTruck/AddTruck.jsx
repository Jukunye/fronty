import { Box, Divider, Paper, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import TabPanel from "../../components/TabPanel";
import General from "../../components/forms/General";
import WeighIn from "../../components/forms/WeighIn";
import WeighOut from "../../components/forms/WeighOut";
import Tankfarm from "../../components/forms/Tankfarm";
import Laboratory from "../../components/forms/Laboratory";
import { useLocation } from "react-router-dom";
import Alert from "@mui/material/Alert";

function AddTruck(props) {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const location = useLocation();
  const { number, truck } = location.state ? location.state : { number: 0 };
  const [value, setValue] = useState(number);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmissionSuccess = () => {
    setShowSuccessAlert(true); // Show success alert
    // // Hide success alert after 1 second
    setTimeout(() => {
      setShowSuccessAlert(false);
    }, 3000);
  };

  return (
    <Paper elevation={2} sx={{ my: 3, maxWidth: 800 }}>
      <Typography
        variant="h5"
        sx={{
          py: 2,
          ml: 2,
          position: "sticky",
          top: "-5px",
          zIndex: 1,
          backgroundColor: "white",
        }}
      >
        Truck Entry
      </Typography>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          sx={{
            position: "sticky",
            top: "48px",
            zIndex: 1,
            backgroundColor: "white",
          }}
        >
          <Tab label="General" id="tab-0" />
          <Tab label="Weigh In" id="tab-1" />
          <Tab label="Lab" id="tab-2" />
          <Tab label="Tank farm" id="tab-3" />
          <Tab label="Weigh Out" id="tab-4" />
        </Tabs>
        <Divider
          sx={{
            position: "sticky",
            top: "94px",
            zIndex: 1,
          }}
        />
        {showSuccessAlert && (
          <Box
            my={2}
            sx={{
              position: "sticky",
              top: "48px", // Adjust this value to match the height of your tabs
              zIndex: 2,
              backgroundColor: "white",
            }}
          >
            <Alert
              severity="success"
              onClose={() => setShowSuccessAlert(false)}
            >
              Submission successfully.
            </Alert>
          </Box>
        )}
        <TabPanel value={value} index={0}>
          <General
            sx={{ px: 1 }}
            truck={truck}
            onSubmissionSuccess={handleSubmissionSuccess}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <WeighIn
            sx={{ px: 1 }}
            truck={truck}
            onSubmissionSuccess={handleSubmissionSuccess}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Laboratory
            sx={{ px: 1 }}
            truck={truck}
            onSubmissionSuccess={handleSubmissionSuccess}
          />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Tankfarm
            sx={{ px: 1 }}
            truck={truck}
            onSubmissionSuccess={handleSubmissionSuccess}
          />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <WeighOut
            sx={{ px: 1 }}
            truck={truck}
            onSubmissionSuccess={handleSubmissionSuccess}
          />
        </TabPanel>
      </Box>
    </Paper>
  );
}

export default AddTruck;
