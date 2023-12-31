import { Box, Grid, colors } from '@mui/material';
import React, { useState, useEffect } from 'react';
import assets from "../../assets";
import SigninForm from '../../components/SigninForm/SigninForm';
import SignupForm from '../../components/SignupForm/SignupForm';
import "./SigninPage.scss";


export const ScreenMode = {
  SIGN_IN: "SIGN_IN",
  SIGN_UP: "SIGN_UP"
};

const SigninPage = () => {
  useEffect(() => {
    // Add the class to the body element when the component mounts
    document.body.classList.add('body-with-background');

    // Remove the class when the component unmounts
    return () => {
      document.body.classList.remove('body-with-background');
    };
  }, []);

  const [left, setLeft] = useState(0);
  const [right, setRight] = useState("unset");
  const [width, setWidth] = useState(0);

  const [backgroundImage, setBackgroundImage] = useState(assets.images.signinBg);
  const [currMode, setCurrMode] = useState(ScreenMode.SIGN_IN);

  const onSwitchMode = (mode) => {
    setWidth(100);

    const timeout1 = setTimeout(() => {
      setCurrMode(mode);
      setBackgroundImage(mode === ScreenMode.SIGN_IN ? assets.images.signinBg : assets.images.signupBg);
    }, 1100);

    const timeout2 = setTimeout(() => {
      setLeft("unset");
      setRight(0);
      setWidth(0);
    }, 1200);

    const timeout3 = setTimeout(() => {
      setRight("unset");
      setLeft(0);
    }, 2500);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  };

  return (
    <>
      <Grid container sx={{ height: "100vh" }}>
        <Grid
          width={{ xs: "100%", sm: "auto" }}
          item xs={12} sm={5} md={4} sx={{ position: "relative", padding: 3 }}
        >
          {
            currMode === ScreenMode.SIGN_IN ? (
              <SigninForm onSwitchMode={onSwitchMode} />
            ) : (
              <SignupForm onSwitchMode={onSwitchMode} />
            )
          }
          <Box sx={{
            position: "absolute",
            top: 0,
            left: left,
            right: right,
            width: `${width}%`,
            height: "100%",
            bgcolor: colors.grey[800],
            transition: "all 1s ease-in-out"
          }} />
        </Grid>
        <Grid
          display={{ xs: "none", sm: "block" }}
          item xs={8} sm={7} md={8} sx={{
            position: "relative",
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}>
          <Box sx={{
            position: "absolute",
            top: 0,
            left: left,
            right: right,
            width: `${width}%`,
            height: "100%",
            bgcolor: colors.common.white,
            transition: "all 1s ease-in-out"
          }} />
        </Grid>
      </Grid>
    </>
  );
};

export default SigninPage;