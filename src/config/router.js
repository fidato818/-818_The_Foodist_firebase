import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";

import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
// import * as firebase from "firebase";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
// import Signup from "../Components/User/SignupUser";
import Login from "../Components/Admin/Login";
import DashAdmin from "../Components/Admin/DashAdmin";
import OrderDetails from "../Components/OrderDetails";
import { withStyles } from "@material-ui/core/styles";

// import Drawer from '@material-ui/core/Drawer';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import SignupUser from "../Components/User/SignupUser";
import DashUser from "../Components/User/DashUser";
import MyRequests from "../Components/MyRequests";
import InProcess from "../Components/Admin/InProcess";
import Delivered from "../Components/Admin/Delivered";
import Pending from "../Components/Admin/Pending";



import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

function Index() {
  return <h1 />;
}

const styles = theme => ({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    textDecoration: "None",
    color: "Black"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      left: false,
      auth: true,
      anchorEl: null
    };

  }
  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;

    const HelloWorld = ({ name }) => (
      <div><Button color="inherit">
        <Link to="/SignupUser" className={classes.title}>
          Signup
                </Link>
      </Button>
        <Button color="inherit">
          <Link to="/login/" className={classes.title}>
            Login
                </Link>
        </Button>
        <Button color="inherit">
          <Link to="/Dashuser/" className={classes.title}>
            DashUser
                </Link>
        </Button>
      </div>
    );

    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);



    return (
      <Router>
        <div className={classes.root}>

          <AppBar color="default" position="fixed">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                <Link to="/" className={classes.title}>
                  {" "}
                  818' The Foodist
                </Link>
              </Typography>
              {/* <Button color="inherit">
              <Link to="/">Index</Link>
            </Button> */}


              {/* <Button color="inherit">
                <Link to="/MyRequests/">MyRequests</Link>
              </Button> */}

              <FormGroup>
                <FormControlLabel control={<Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />} label={auth ? <HelloWorld /> : 'Login'} />
              </FormGroup>

              {auth && <div>
                <IconButton aria-owns={open ? 'menu-appbar' : undefined} aria-haspopup="true" onClick={this.handleMenu} color="inherit">
                  <AccountCircle />
                </IconButton>
                <Menu id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }} transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }} open={open} onClose={this.handleClose}>
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                  <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                </Menu>
              </div>}
            </Toolbar>

          </AppBar>

          <br />
          <br />
          <br />

          <Route path="/" exact component={Index} />
          <Route path="/SignupUser" component={SignupUser} />
          <Route path="/Login" component={Login} />
          <Route path="/DashAdmin" component={DashAdmin} />
          <Route path="/OrderDetails" component={OrderDetails} />
          <Route path="/DashUser" component={DashUser} />
          <Route path="/MyRequests" component={MyRequests} />
          <Route path="/Admin/InProcess" component={InProcess} />
          <Route path="/Admin/Pending" component={Pending} />
          <Route path="/Admin/Delivered" component={Delivered} />
        </div>
      </Router>
    );
  }
}
Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
