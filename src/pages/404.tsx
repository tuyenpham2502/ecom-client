import Typography from "@mui/material/Typography";
import React from "react";
import MainLayout from "src/infrastructure/common/layout/MainLayout";

export default function Custom404() {
    return (
        <>
            <MainLayout>
                <Typography sx={{color:"red", fontSize:"18px"}}>404 </Typography>

            </MainLayout>
        </>
    )
}
