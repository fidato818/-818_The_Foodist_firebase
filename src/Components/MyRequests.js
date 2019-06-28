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
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
// import SwipeableViews from 'react-swipeable-views';
// import { db } from "../../config/firebase";

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
class MyRequests extends React.Component {
  constructor(props) {
    super(props);
  }

  /*************************************************/
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  /*************************************************/

  render() {
    const { classes, theme } = this.props;
    const { history } = this.props;

    /************************************************/

    return (
      <Router>
        <React.Fragment>
          <br />

          <Grid item row>
            <div>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  fullWidth
                  className={classes.button}
                  onClick={() => {
                    history.push("./Admin/Pending");
                  }}
                >
                  Pending Orders
                </Button>
              </Grid>
              <br />
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  fullWidth
                  className={classes.button}
                  onClick={() => {
                    history.push("./Admin/InProcess");
                  }}
                >
                  Process Orders
                </Button>
              </Grid>
              <br />
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  fullWidth
                  className={classes.button}
                  onClick={() => {
                    history.push("./Admin/Delivered");
                  }}
                >
                  Delivered Orders
                </Button>
              </Grid>
              {/* </Paper> */}
              {/* </TabContainer> */}
              {/* </SwipeableViews> */}
            </div>
          </Grid>
        </React.Fragment>
      </Router>
    );
  }
}
MyRequests.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MyRequests);
