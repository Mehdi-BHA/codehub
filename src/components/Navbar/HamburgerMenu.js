import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import DrawerMenu from "./DrawerMenu";

const HamburgerMenu = () => {
 
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <IconButton onClick={handleClick}>
        <MenuIcon fontSize="large"  color="primary" />
      </IconButton>
      <DrawerMenu isOpen={isOpen} handleClose={handleClose} />
    </>
  );
};

export default HamburgerMenu;
