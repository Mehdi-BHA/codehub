import React from "react";
import { Button, Divider, Stack } from "@mui/material";

const Menu = () => {
    return (
        <Stack direction="row" spacing={1}>
            {["Accueil", "Services", "Tarifs", "Gallerie"].map((elem) => (
                <>
                    <Button color="inherit">{elem}</Button>
                    <Divider orientation="vertical" flexItem />
                </>
            ))}
            <Button variant="contained">Contact</Button>
        </Stack>
    );
};

export default Menu;
