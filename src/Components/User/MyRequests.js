import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
// import * as firebase from "firebase";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
// import { db } from "../../config/firebase";

function TabContainer({ children, dir }) {
  return <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
    {children}
  </Typography>;
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
    this.state = {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
      age: "",
      gender: "",
      value: 0
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
          <Grid item xs={12} >
                  <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    fullWidth
                    className={classes.button}
                    
                  >
                    Pending Orders
                  </Button>
                  </Grid>
                  <br/>
                  <Grid item xs={12}>
                  <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    fullWidth
                    className={classes.button}
                  >
                    Process Orders
                  </Button>
                  </Grid>
                  <br/>
                  <Grid item xs={12}>
                  <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    fullWidth
                    className={classes.button}
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
