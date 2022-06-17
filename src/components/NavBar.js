import React from "react";
import { makeStyles } from "@mui/styles";
import { Button, Grid, Typography } from "@mui/material";
import { theme } from "../utils/theme";
const useStyles = makeStyles((theme) => ({
  row: {
    display: "flex",
    // justifyContent: "space-around",
    alignItems: "center",
    padding: "1%",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  },
  col1: {
    display: "flex",

    paddingLeft: "5%!important",
    justifyContent: "flex-start",
  },
  atools: {
    fontSize: "35px!important",
    color: "#023047",
    fontWeight: "900!important",
  },
  dot: {
    fontSize: "35px!important",
    color: "#fb8500!important",
    fontWeight: "900!important",
  },
  bttn1: {
    //marginLeft: "40px!important",
    width: "100%",
    fontWeight: "700!important",
  },
  bttn2: {
    width: "100%",
    backgroundColor: "#fb8500!important",
    fontWeight: "700!important",
  },
}));
const NavBar = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3} className={classes.row}>
        <Grid item xs={8} className={classes.col1}>
          <Typography className={classes.atools}>ATools</Typography>
          <Typography className={classes.dot}>.</Typography>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" className={classes.bttn1}>
            Start free trial
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" className={classes.bttn2}>
            Login
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default NavBar;
