import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import AppBar from "@material-ui/core/AppBar";
// import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
// import Radio from "@material-ui/core/Radio";
// import FormControl from "@material-ui/core/FormControl";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import FormLabel from "@material-ui/core/FormLabel";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
// import * as firebase from "firebase";

// import SwipeableViews from 'react-swipeable-views';

import Paper from "@material-ui/core/Paper";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Rating from "material-ui-rating";
import MenuIcon from "@material-ui/icons/Menu";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { Redirect } from "react-router";
// import * as firebase from "firebase";
import config from "../../configure/configFirebase";

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500
  },
  paper: {
    // marginTop: theme.spacing(13),
    // marginBottom: theme.spacing(4),
    // marginLeft: theme.spacing(20),
    // marginRight: theme.spacing(20),
    // margin: theme.spacing(10),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      // marginTop: theme.spacing(13),
      // marginBottom: theme.spacing(6),
      // padding: theme.spacing(3)
    }
  }
  // root: {
  //   flexGrow: 1,
  //   backgroundColor: theme.palette.background.paper
  // }
});
class Pending extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      items: ""
    };
  }

  /*************************************************/
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  /*************************************************/
  componentDidMount() {
    /* Cause your component to request data from Firebase when
       component first mounted */
    this.getMyStory();
  }
  /*************************************************/

  getMyStory() {
    let messagesRef = config.database().ref("Order");
    // .orderByKey()
    // .limitToLast(100);
    messagesRef.on("value", snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = snapshot.val();
      let newArr = [];
      for (let word in message) {
        console.log(message[word].status);
        newArr.push({
          name: message[word].name,
          quant: message[word].quant,
          state: message[word].state,
          status: "pending"
        });
      }
      // console.log(message);
      // // arr.push(message)
      this.setState({ arr: newArr });
    });
  }

  /*************************************************/
  process() {
    console.log("success");
  }
  /*************************************************/

  render() {
    const { classes, theme } = this.props;
    const { arr } = this.state;
    const { history } = this.props;
    console.log(arr);
    /************************************************/

    return (
      <React.Fragment>
        <div className={classes.root}>
          {/* <Paper className={classes.paper}> */}
          <Table className={classes.table} size="small">
            <TableHead>
              <TableRow>
                <TableCell>Order Name</TableCell>
                <TableCell align="center">Calories</TableCell>
                <TableCell align="center">Fat&nbsp;(g)</TableCell>
                <TableCell align="center">Categories</TableCell>
                <TableCell align="center">Order Status</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.arr.map((e, index) => {
                return (
                  <TableRow key={index + 1}>
                    <TableCell component="th" scope="row">
                      {e.name}
                    </TableCell>
                    <TableCell align="center">{e.quant}</TableCell>
                    <TableCell align="center">{e.state}</TableCell>
                    <TableCell align="center">{e.fat}</TableCell>

                    {/* <TableCell align="center">
                      <Chip
                        color="secondary"
                        size="small"
                        label={arr.categories}
                      />
                    </TableCell> */}

                    <TableCell align="center">Delivered</TableCell>
                    <TableCell align="center">
                      <div>
                        {/* <Button
                          variant="contained"
                          size="small"
                          color="primary"
                          className={classes.margin}
                          onClick={this.process.bind(this)}
                        >
                          inprocess
                        </Button> */}
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          {/* </Paper> */}
        </div>
      </React.Fragment>
    );
  }
}
Pending.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Pending);
