import { Box, Container, Typography, useTheme } from "@mui/material";
import React from "react";
import AboutImage from "../../assets/images/AboutImage";
import FlippedText from "../FlippedText";

const About = () => {
    const theme = useTheme();
    return (
        <Box sx={{ position: "relative" }}>
            <AboutImage
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    height: "100%",
                }}
            />
            <Container maxWidth="lg" sx={{ py: 17 }}>
                <Typography
                    variant="h3"
                    sx={{
                        maxWidth: "800px",
                    }}
                >
                    Espace de coworking, refuge pour les{" "}
                    <FlippedText
                        duration={2}
                        words={["créatifs", "freelances", "startups"]}
                    />{" "}
                    avec une vue imprenable sur sousse
                </Typography>
            </Container>
        </Box>
    );
};

export default About;
