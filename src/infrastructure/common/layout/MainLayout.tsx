import React from "react";
import Header from "src/infrastructure/common/layout/Header";
import Footer from "src/infrastructure/common/layout/Footer";
import Content from "src/infrastructure/common/layout/Content";
import { Box } from "@mui/material";
const MainLayout = ({user, defaultSelectedKeys, ...props}:any) => {
    return (
        <Box sx={{
            height:"100vh",
        }}>
            <Header defaultSelectedKeys={defaultSelectedKeys} userContext={user || {}}/>
            <Content userContex={user || {}}>
               {props.children}
            </Content>
            <Footer/>
        </Box>
    )
}

export default MainLayout;