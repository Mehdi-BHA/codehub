import { Box, Container, Typography } from "@mui/material";
import React from "react";
import HeroFouter from "./HeroFooter";
import Image from "../../assets/images/salle.jpg"

const Hero = () => {
    return (
        <>
            <Box
                sx={{
                    height: "600px",
                    backgroundImage: `url(${Image})`,
                    backgroundSize: "cover",
                    mt:5
                }}
            >
                <Container maxWidth="lg" sx={{pt:15, pb:20}}>
                    <Typography
                        variant="h4"
                        sx={{
                          maxWidth:"600px"
                        }}
                    >
                        Que vous soyez freelance établie ou une startup en développement, découvrez notre espaces et des solutions flexibles pour faire évoluer votre entreprise.
                    </Typography>
                </Container>
            </Box>
            <HeroFouter />
        </>
    );
};

export default Hero;
