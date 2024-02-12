import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function ChooseTruck({ link }) {
  return (
    // <Box sx={{ m: 4 }}>
    //   <Typography>Please select a truck to edit from the table</Typography>
    //   <Link to="/weighbridgeout">
    //     <Button sx={{ m: 4 }} variant="outlined">
    //       Choose Truck
    //     </Button>
    //   </Link>
    //   </Box>

    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      // minHeight="100vh"
      sx={{ mb: 3 }}
    >
      <Card sx={{ maxWidth: 320 }}>
        <CardActionArea>
          <CardContent>
            <Typography>Please select a truck to edit in table.</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={link}>
            <Button sx={{ m: 3 }} variant="outlined" size="small">
              Choose Truck
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
}

export default ChooseTruck;
