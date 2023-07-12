import React, { useState } from "react";
import styles from "assets/css/pages/account/sign-in.module.css";
import { Button, Grid, TextField, Typography } from "@mui/material";
import imageBanner from "assets/images/image-banner-sign-in.png";
import Image from "next/image";
import iconSignInBtn from "assets/images/icon-sign-in-btn.svg";
import {
  BoldText,
  NormalText,
} from "src/infrastructure/common/components/controls/text";
const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChangeEmail = (e) => {
    setUser({
      ...user,
      email: e.target.value,
    });
  };

  const onChangePassword = (e) => {
    setUser({
      ...user,
      password: e.target.value,
    });
  };

  return (
    <Grid container className={styles.sign_in_wrapper}>
      <Grid item xs={6} className={styles.sign_in_form_wrapper}>
        <Grid container className={styles.sign_in_form} direction={"column"} alignItems={"center"}>
          <Grid item xs={12} className={styles.sign_in_form_title}>
            <NormalText className={styles.welcome_text}>
              Welcome Back !!!
            </NormalText>
            <BoldText variant="h3" className={styles.sign_in_form_title_text}>
              Sign In
            </BoldText>
            <Grid container direction={"column"} spacing={2} >
              <Grid item >
                <TextField
                  className={styles.sign_in_input}
                  label="Email"
                  variant="outlined"
                  value={user.email}
                  onChange={onChangeEmail}
                />
              </Grid>
              <Grid item>
                <TextField
                  className={styles.sign_in_input}
                  label="Password"
                  variant="outlined"
                  type="password"
                  value={user.password}
                  onChange={onChangePassword}
                />
              </Grid>
              <Grid item className={styles.sign_in_btn}>
                <Button variant="contained" sx={{borderRadius:"23px"}} color="primary" endIcon ={<Image src={iconSignInBtn} alt="icon"/>}>
                    Sign In
                </Button>
                </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6} className={styles.sign_in_banner}>
        <Image src={imageBanner} alt="banner" />
      </Grid>
    </Grid>
  );
};
export default SignIn;
