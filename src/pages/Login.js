import { Grid } from "@mui/material";
import React from "react";
import { theme } from "../utils/theme";
import LoginForm from "../components/loginForm";
import NavBar from "../components/NavBar";
import login2 from "../assets/login2.png";
import { makeStyles } from "@mui/styles";
import { ClassNames } from "@emotion/react";
import { height } from "@mui/system";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90.5vh",
    [theme.breakpoints.down("sm")]: {
      height: "650px",
    },
  },
  logindiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    maxWidth: "100%",
    minHeight: "90.5vh",
    // margin: "auto",
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none!important",
    },
  },
}));
export const Login = () => {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <Grid container className={classes.container}>
        <Grid item sm={5} xs={12} className={classes.logindiv}>
          <LoginForm />
        </Grid>
        <Grid item sm={7} xs={0}>
          <img src={login2} className={classes.image} />
        </Grid>
      </Grid>
    </div>
  );
};
