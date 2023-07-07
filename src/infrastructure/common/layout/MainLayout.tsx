import React from "react";
import Header from "src/infrastructure/common/layout/Header";
import Footer from "src/infrastructure/common/layout/Footer";
import Content from "src/infrastructure/common/layout/Content";
import { Box } from "@mui/material";
const MainLayout = ({context, ...props}:any) => {
    console.log("MainLayout",context);
    return (
        <Box sx={{
            height:"100vh",
        }}>
            <Header context={context}/>
            <Content context={context}>
               {props.children}
            </Content>
            <Footer/>
        </Box>
    )
}

export default MainLayout;