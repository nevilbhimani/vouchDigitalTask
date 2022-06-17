import React from "react";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Checkbox, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useFormik } from "formik";
import axios from "axios";
import { FormControlLabel } from "@mui/material";
import * as Yup from "yup";
import { theme } from "../utils/theme";
import { makeStyles } from "@mui/styles";
import { display } from "@mui/system";
const useStyles = makeStyles((theme) => ({
  error: {
    display: "flex",
    color: theme.palette.error.main,
  },
  formDiv: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    height: "40vh",
    width: "65%!important",
  },
  loginbttn: {
    width: "100%",
    fontWeight: "600!important",
  },
  field: {
    width: "100%",
  },
  header: {
    fontSize: "40px!important",
    fontWeight: "1000!important",
  },
  lighttext: {
    color: "#adb5b8!important",
  },
  lastRow: {
    display: "flex",
  },
  fpass: {
    justifyContent: "flex-end",
    alignItems: "center",
    display: "flex",
  },
  rpass: {
    justifyContent: "flex-start",
    alignItems: "center",
    display: "flex",
  },
}));
const LoginForm = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Required")
        .email("Enter a valid email address"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      var axios = require("axios");
      var data = JSON.stringify({
        email: formik.values.email,
        password: formik.values.password,
      });

      var config = {
        method: "post",
        url: "https://reqres.in/api/login",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          setOpen(true);
        })
        .catch(function (error) {
          console.log(error);
          setOpenError(true);
        });
    },
  });
  console.log(formik.errors);
  const handleClose = () => {
    setOpen(false);
    setOpenError(false);
  };
  return (
    <>
      <Grid container className={classes.formDiv}>
        <Grid item xs={12}>
          <Typography className={classes.header}>Welcome Back</Typography>
          {/* </Grid>
        <Grid item xs={12}> */}
          <Typography className={classes.lighttext}>
            sub-title text goes here
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="email"
            name="email"
            type="email"
            helperText={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : null
            }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            variant="outlined"
            className={classes.field}
            label="Email Address"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            className="smallfield"
            label="password"
            id="password"
            helperText={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : null
            }
            name="password"
            type="password"
            className={classes.field}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            className={classes.loginbttn}
            variant="contained"
            type="submit"
            onClick={formik.handleSubmit}
          >
            Login
          </Button>
        </Grid>
        <Grid item xs={12} className={classes.lastRow}>
          <Grid item xs={8} className={classes.rpass}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember password?"
            />
          </Grid>
          <Grid item xs={4} className={classes.fpass}>
            Forgot password?
          </Grid>
        </Grid>
      </Grid>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity="success" onClose={handleClose} sx={{ width: "100%" }}>
          Login successful!
        </Alert>
      </Snackbar>
      <Snackbar open={openError} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity="error" onClose={handleClose} sx={{ width: "100%" }}>
          User not found!
        </Alert>
      </Snackbar>
    </>
  );
};
export default LoginForm;
