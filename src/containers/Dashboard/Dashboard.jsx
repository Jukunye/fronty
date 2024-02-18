import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

function Dashboard() {
  return (
    <Box>Hello</Box>
    // <Box m='20px'>
    //   {/* HEADER */}
    //   <Box display='flex' justifyContent='space-between' alignItems='center'>
    //     <Header title='DASHBOARD' subtitle='Welcome to your dashboard' />
    //   </Box>

    //   {/* GRID & CHARTS */}
    //   <Box display='grid' gridTemplateColumns='repeat(12, 1fr)' gridAutoRows='140px' gap='20px'>
    //     {/* ROW 1 */}
    //     <Box
    //       gridColumn='span 4'
    //       // backgroundColor={colors.primary[400]}
    //       display='flex'
    //       alignItems='center'
    //       justifyContent='center'
    //       width='100%' // Set the width to 100% to maintain original size
    //     >
    //       <Link to='/trucks' style={{ display: 'contents' }}>
    //         <StatBox
    //           subtitle='View All Trucks'
    //           icon={
    //             <LocalShippingOutlinedIcon />
    //           }
    //         />
    //       </Link>
    //     </Box>
    //     <Box
    //       gridColumn='span 4'
    //       // backgroundColor={colors.primary[400]}
    //       display='flex'
    //       alignItems='center'
    //       justifyContent='center'
    //     >
    //       <Link to='/trucks' style={{ display: 'contents' }}>
    //         <StatBox
    //           subtitle='Gate'
    //           icon={
    //             <LocalShippingOutlinedIcon />
    //           }
    //         />
    //       </Link>
    //     </Box>
    //     <Box
    //       gridColumn='span 4'
    //       // backgroundColor={colors.primary[400]}
    //       display='flex'
    //       alignItems='center'
    //       justifyContent='center'
    //     >
    //       <Link to='/trucks' style={{ display: 'contents' }}>
    //         <StatBox
    //           title={inCount}
    //           subtitle='IN'
    //           icon={
    //             <LocalShippingOutlinedIcon />
    //           }
    //         />
    //       </Link>
    //     </Box>

    //     {/* ROW 2 */}
    //     <Box
    //       gridColumn='span 4'
    //       // backgroundColor={colors.primary[400]}
    //       display='flex'
    //       alignItems='center'
    //       justifyContent='center'
    //     >
    //       <Link to='/lab' style={{ display: 'contents' }}>
    //         <StatBox
    //           title={qcCount}
    //           subtitle='QC'
    //           icon={
    //             <LocalShippingOutlinedIcon />
    //           }
    //         />
    //       </Link>
    //     </Box>
    //     <Box
    //       gridColumn='span 4'
    //       // backgroundColor={colors.primary[400]}
    //       display='flex'
    //       alignItems='center'
    //       justifyContent='center'
    //     >
    //       <Link to='/offloading' style={{ display: 'contents' }}>
    //         <StatBox
    //           title={tankFarmCount}
    //           subtitle='Offloading'
    //           icon={
    //             <LocalShippingOutlinedIcon />
    //           }
    //         />
    //       </Link>
    //     </Box>
    //     <Box
    //       gridColumn='span 4'
    //       // backgroundColor={colors.primary[400]}
    //       display='flex'
    //       alignItems='center'
    //       justifyContent='center'
    //     >
    //       <Link to='/weighbridge' style={{ display: 'contents' }}>
    //         <StatBox
    //           title={outCount}
    //           subtitle='OUT'
    //           icon={
    //             <LocalShippingOutlinedIcon />
    //           }
    //         />
    //       </Link>
    //     </Box>
    //   </Box>
    // </Box>
  );
}

export default Dashboard;
