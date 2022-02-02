import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";

const CardContact = () => {
  return (
    <Box p={2} sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        CONTACT
      </Typography>
      <Divider variant="middle" />
      <Box
        sx={{
          ml: 3,
          mt: 2,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <LocationOnIcon />
        <Typography ml={1} variant="p">
          7ème étage, Immeuble Jawhara Médicale, Av. du 20 Mars 1956, Sousse
          4000
        </Typography>
      </Box>
      <Box
        sx={{
          ml: 3,
          mt: 1,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <LocalPhoneIcon />
        <Typography ml={1} variant="p">
          (+216) 56 434 555
        </Typography>
      </Box>
      <Box
        sx={{
          ml: 3,
          mt: 1,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <MailIcon />
        <Typography ml={1} variant="p">
          contact@codehub.tn
        </Typography>
      </Box>
      <Box
        sx={{
          ml: 3,
          mt: 1,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <InstagramIcon />
        <Typography ml={1} variant="p">
          codehub.coworking
        </Typography>
      </Box>
    </Box>
  );
};

export default CardContact;
