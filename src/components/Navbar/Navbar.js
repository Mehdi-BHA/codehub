import React, { useState } from "react";
import logoCodeHub from "../../assets/images/logoCodeHub.svg";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Box, Hidden, styled, useTheme } from "@mui/material";
import Menu from "./Menu";
import HamburgerMenu from "./HamburgerMenu";
import { hexToRgba } from "../../utils/colors";

const Navbar = () => {
    const [scrolled, setIsScrolled] = useState(false);
    const theme = useTheme();
    const handleNav = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleNav);

    return (
        <AppBar
            position="fixed"
            elevation={scrolled ? 8 : 0}
            sx={{
                background: hexToRgba(theme.palette.background.default, 0.8),
                transition: ".2s",
                backdropFilter: scrolled ? "blur(5px)" : "inherit",
            }}
        >
            <Container maxWidth="xl">
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <NavLogo src={logoCodeHub} alt="logo codehub" />
                    <Box sx={{ display: { md: "block", xs: "none" } }}>
                        <Menu />
                    </Box>
                    <Box sx={{ display: { md: "none", xs: "block" } }}>
                        <HamburgerMenu />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

const NavLogo = styled("img")(({ theme }) => ({
    height: "40px",
    objectFit: "contain",
}));
export default Navbar;
