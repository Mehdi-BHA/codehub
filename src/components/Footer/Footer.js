import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      style={{
        height: "50px",
        width: "100%",
        padding:'0 10px',
        backgroundColor: theme.palette.primary.main,
        display: 'flex',
        justifyContent:'space-between',
        alignItems:'center'
      }}
    >
        <Typography>
        Copyrights © 2022 All Rights Reserved by CodeHub
        </Typography>
     
    </Box>
  );
};

export default Footer;
