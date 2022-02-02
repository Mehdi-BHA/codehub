import { Box } from "@mui/material";
import React, { useState } from "react";
import TopIcon from "../../assets/images/TopIcon";

const GoToTop = () => {
  const [scrolled, setIsScrolled] = useState(false);
  const handleScroll = () => setIsScrolled(window.scrollY > 0);
  window.addEventListener("scroll", handleScroll);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box
      onClick={scrollToTop}
      sx={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 333,
        display: scrolled ? "block" : "none",
        cursor: 'pointer',
      }}
    >
      <TopIcon/>
    </Box>
  );
};

export default GoToTop;
