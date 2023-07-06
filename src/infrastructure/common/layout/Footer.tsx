import { Button, Grid, Input } from "@mui/material";
import React from "react";
import Router from "next/router";
import Image from "next/image";
import styles from "assets/css/common/layout/footer.module.css";
import Logo from "assets/images/logo-footer.png";
import { NormalText } from "src/infrastructure/common/components/controls/text";
import { NormalButton } from "../components/controls/button";
const Footer = () => {


  const onClickMenuItem = (path: string) => {
    Router.push(path);
  }


  return (
    <div className={styles.footer}>
      <div className={styles.footer_content}>
        <Grid container spacing={8}>
          <Grid item xs={4} sm={6} md={3}>
            <Grid direction={"column"} container spacing={8}>
              <Grid item>
                <Image src={Logo} alt="logo" />
              </Grid>
              <Grid item>
                <NormalText className={styles.footer_address}>
                  400 University Driver Suite 200 Coral Gables, FL 33134 USA
                </NormalText>
              </Grid>
            </Grid>
          </Grid>
          {/* links footer */}
          <Grid item xs={4} sm={6} md={3}>
            <Grid direction={"column"} container spacing={8}>
              <Grid item>
                <NormalText className={styles.footer_title}>Links</NormalText>
              </Grid>
              <Grid item>
                <Grid container spacing={6} direction={"column"}>
                  <Grid item>
                    <NormalText className={styles.footer_items} onClick={() => onClickMenuItem("/")}>Home</NormalText>
                  </Grid>
                  <Grid item>
                    <NormalText className={styles.footer_items} onClick={() => onClickMenuItem("/shop")}>Shop</NormalText>
                  </Grid>
                  <Grid item>
                    <NormalText className={styles.footer_items} onClick={() => onClickMenuItem("/about")}>About</NormalText>
                  </Grid>
                  <Grid item>
                    <NormalText className={styles.footer_items} onClick={() => onClickMenuItem("/contact")}>Contact</NormalText>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* help footer */}
          <Grid item xs={4} sm={6} md={3}>
            <Grid direction={"column"} container spacing={8}>
              <Grid item>
                <NormalText className={styles.footer_title}>Help</NormalText>
              </Grid>
              <Grid item>
                <Grid container spacing={6} direction={"column"}>
                  <Grid item>
                    <NormalText className={styles.footer_items}>Payment Options</NormalText>
                  </Grid>
                  <Grid item>
                    <NormalText className={styles.footer_items}>Returns</NormalText>
                  </Grid>
                  <Grid item>
                    <NormalText className={styles.footer_items}>Privacy Polices</NormalText>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* news letter */}
          <Grid item xs={4} sm={6} md={3}>
            <Grid direction={"column"} container spacing={8}>
              <Grid item>
                <NormalText className={styles.footer_title}>News Letter</NormalText>
              </Grid>
              <Grid item>
                <Grid container alignItems={"center"}>
                  <Grid item>
                    <Input className={styles.footer_input} placeholder="Enter your email address" />
                  </Grid>
                  <Grid item>
                    <NormalButton className={styles.footer_button}>Subscribe</NormalButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className={styles.footer_bottom}>
        <NormalText className={styles.footer_copy_right}>
          2023 furino. All rights reverved
        </NormalText>
      </div>
    </div>
  );
};

export default Footer;
