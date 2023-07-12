import React from "react";
import Image from 'next/image'
import { Box, Button, Grid, Toolbar, Typography } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import styles from "assets/css/common/layout/header.module.css"
import Logo from "assets/images/logo.png"
import IconAccount from "assets/images/icon-account.svg"
import IconSearch from "assets/images/icon-search.svg"
import IconHeart from "assets/images/icon-heart.svg"
import IconCart from "assets/images/icon-cart.svg"
import { NormalButton } from "../components/controls/button";
import { PageKeys } from "src/core/application/common/domain/enums/MenuKeys";
import Router from "next/router";


const Header = ({userContext, defaultSelectedKeys}) => {
   console.log("Header",userContext, defaultSelectedKeys);
    const selectKey = (selectKey) => {
        if(defaultSelectedKeys === selectKey){
            return {
                borderBottom: "1px solid #000"
            }
        }
    }

    const onClickLogo = () => {
        Router.push("/")
    }



    return (
        <AppBar className={styles.header} elevation={0} position="sticky">
            <Toolbar>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        padding: "10px 0px"
                    }}
                    component="div"
                >
                    {/* logo */}
                    <div className={styles.logo_wrapper} onClick={onClickLogo}>
                        <Image src={Logo} alt="logo" />
                    </div>
                    {/* menu */}
                    <div>
                        <Grid container spacing={8}>
                            <Grid item xs={4} sm={6} md={3}>
                                <NormalButton className={styles.menu_item} variant="text" href="/" style={selectKey(PageKeys.Home)}>
                                    Home
                                </NormalButton>
                            </Grid>
                            <Grid item xs={4} sm={6} md={3}>
                                <NormalButton className={styles.menu_item} variant="text" href="/shop" style={selectKey(PageKeys.Shop)}>
                                    Shop
                                </NormalButton>
                            </Grid>
                            <Grid item xs={4} sm={6} md={3}>
                                <NormalButton className={styles.menu_item} variant="text" href="/about" style={selectKey(PageKeys.About)}>
                                    About
                                </NormalButton>
                            </Grid>
                            <Grid item xs={4} sm={6} md={3}>
                                <NormalButton className={styles.menu_item} variant="text" href="/contact" style={selectKey(PageKeys.Contact)}>
                                    Contact
                                </NormalButton>
                            </Grid>
                        </Grid>
                    </div>
                    <div>
                        <Grid container spacing={8}>
                            <Grid item xs={4} sm={4} md={3}>
                                <Image src={IconAccount} alt="icon-account" />
                            </Grid>
                            <Grid item xs={4} sm={4} md={3}>
                                <Image src={IconSearch} alt="icon-search" />
                            </Grid>
                            <Grid item xs={4} sm={4} md={3}>
                                <Image src={IconHeart} alt="icon-heart" />
                            </Grid>
                            <Grid item xs={4} sm={4} md={3}>
                                <Image src={IconCart} alt="icon-cart" />
                            </Grid>
                        </Grid>
                    </div>
                </Box>
            </Toolbar>
        </AppBar>
    )
}


export default Header;

