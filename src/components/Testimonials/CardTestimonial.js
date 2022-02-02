import { Avatar, Box, Typography, useTheme } from "@mui/material";
import React from "react";

const CardTestimonial = ({witness}) => {
  return (
    <Box
      sx={{
        margin: "10px auto",
        padding: "30px",
        width: "350px",
        height: "300px",
        backgroundColor: "white",
        borderRadius: "30px",
        display: "flex", flexDirection: "column" ,
      }}
    >
     <Box sx={{ mb:'20px', display: "flex", justifyContent: "space-evenly" ,alignItems:'center' }}>
        <Avatar alt="Remy Sharp"  src={witness.img}  />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant={"span"}>{witness.name}</Typography>
          <Typography variant={"i"}>{witness.job}</Typography>
        </Box>
      </Box>

      <Typography variant={"p"} >
      {witness.content}
      </Typography>
     
    </Box>
  );
};

export default CardTestimonial;
