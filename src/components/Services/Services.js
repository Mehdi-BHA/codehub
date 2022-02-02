import { Container, Divider, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import ItemService from "./ItemService";
import ChairIcon from "../../assets/images/ChairIcon";
import ClimatIcon from "../../assets/images/ClimatIcon";
import ConferenceIcon from "../../assets/images/ConferenceIcon";
import Microwave from "../../assets/images/Microwave";
import CoffeeMaker from "../../assets/images/CoffeeMaker";
import WifiIcon from "../../assets/images/Wifi";
import HeaterIcon from "../../assets/images/HeaterIcon";
import CommunityIcon from "../../assets/images/CommunityIcon";


const content = [
    { title: "Wifi", icon: WifiIcon },
    { title: "Climatisation", icon: ClimatIcon },
    { title: "Salle privée", icon: ConferenceIcon },
    { title: "Machines à cafés", icon: CoffeeMaker },
    { title: "Micro-ondes", icon: Microwave },
    { title: "Chauffage", icon: HeaterIcon },
    { title: "Chaise orthopédique", icon: ChairIcon },
    { title: "Communauté", icon: CommunityIcon },
];

const Services = (props) => {
    return (
        <Container maxWidth="md" {...props}>
            <Typography variant="h4" align="center" my={2}> Services</Typography>
            <Divider variant="middle" />
            <Grid container sx={{ py: 4 }} spacing={4}>
                {content.map((elem) => (
                    <Grid item md={4} xs={6}>
                        <ItemService svg={elem.icon} title={elem.title} subtitle={elem.subtitle} />
                    </Grid>
                ))}
            </Grid>
            <Divider variant="middle" />
        </Container>
    );
};

export default Services;
