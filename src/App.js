import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import SignupUser from "./Components/User/SignupUser";
import Login from "./Components/Admin/Login";
import DashUser from "./Components/User/DashUser";
import DashAdmin from "./Components/Admin/DashAdmin";
import AdminDetailPage from "./Components/Admin/AdminDetailPage";
import FoodEditable from "./Components/Admin/FoodEditable";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import "./styles.css";
import Navbar from "./configure/router";

const useStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));
export default function ButtonAppBar() {
  return (
    <React.Fragment>
      <Navbar />
      {/* <DashUser /> */}
      {/* <DashAdmin /> */}
      {/* <AdminDetailPage /> */}
      {/* <FoodEditable /> */}
      {/* <SignupAdmin /> */}
      {/* <SignupUser /> */}
      {/* <h1>Hello Adnan!</h1> */}
      {/* <AppBar
          position="absolute"
          color="default"
          className={classes.appBar}
        >
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              818' The Foodist
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
          
        </AppBar> */}
      {/* <div className={classes.root}>
        <AppBar position="absolute" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography
              variant="h6"
              className={classes.title}
              color="inherit"
              noWrap
            >
              818' The Foodist
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div> */}
    </React.Fragment>
  );
}
