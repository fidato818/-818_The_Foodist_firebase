import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import SwipeableViews from "react-swipeable-views";
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
class Signup extends React.Component {
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
      value: 0,
      cit: "",
      countr: "",
      resturantName: ""
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
  //   handleOnClick = () => {
  //   // some action...
  //   // then redirect
  //   this.setState({redirect: true});
  // }

  render() {
    const { classes, theme } = this.props;
    const {
      gender,
      email,
      fullName,
      password,
      confirmPassword,
      age,
      countr,
      cit,
      resturantName
    } = this.state;
    console.log(gender);

    /************************************************/

    /********************* Radio Button (Gender) ****************************/
    function setGender(event) {
      this.setState({
        gender: event.target.value
      });
    }
    /********************* Radio Button (Gender) ****************************/
    function setEmail(event) {
      this.setState({
        email: event.target.value
      });
    }
    /********************* FullName ****************************/
    function setFullName(event) {
      this.setState({
        fullName: event.target.value
      });
    }
    /********************* password ****************************/
    function passwordUser(event) {
      this.setState({
        password: event.target.value
      });
    }
    /********************* confirm Password ****************************/
    function confirmPasswordUser(event) {
      this.setState({
        confirmPassword: event.target.value
      });
    }
    /********************* Age ****************************/
    function ageUser(event) {
      this.setState({
        age: event.target.value
      });
    }
    /********************* city ****************************/
    function city(event) {
      this.setState({
        cit: event.target.value
      });
    }
    /********************* country ****************************/
    function country(event) {
      this.setState({
        countr: event.target.value
      });
    }
    /********************* resturantName ****************************/
    function restName(event) {
      this.setState({
        resturantName: event.target.value
      });
    }
    /********************* ****************************/
    function handleSubmitUser(event) {
      event.preventDefault();
      const { history } = this.props;
      const {
        gender,
        email,
        fullName,
        password,
        confirmPassword,
        age,
        countr,
        cit
      } = this.state;

      config
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          var userId = config.auth().currentUser.uid;
          config
            .database()
            .ref("Users/" + userId)
            .set({
              gender,
              email,
              fullName,
              password,
              confirmPassword,
              age,
              countr,
              cit
            })
            .then(function() {
              console.log("Document successfully written!");
              history.push("/DashUser");
            })
            .catch(function(error) {
              console.error("Error writing document: ", error);
            });
        });
    }
    /********************* submittedAdmin ****************************/
    function handleSubmitAdmin(event) {
      event.preventDefault();
      const { history } = this.props;
      const {
        gender,
        email,
        fullName,
        password,
        confirmPassword,
        age,
        countr,
        cit,
        resturantName
      } = this.state;
      console.log(gender);
      console.log(email);
      console.log(fullName);
      console.log(password);
      console.log(age);

      config
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          var userId = config.auth().currentUser.uid;
          config
            .database()
            .ref("Resturant_Owner/" + userId)
            .set({
              email,
              fullName,
              password,
              confirmPassword,

              countr,
              cit,
              resturantName
            })
            .then(function() {
              console.log("Document successfully written!");
              history.push("./DashUser/MyRequests");
            })
            .catch(function(error) {
              console.error("Error writing document: ", error);
              alert(error);
            });
        });
    }

    return (
      <Router>
        <React.Fragment>
          <br />
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "100vh" }}
          >
            <div className={classes.root}>
              <AppBar position="static" color="default">
                <Tabs
                  value={this.state.value}
                  onChange={this.handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="fullWidth"
                >
                  <Tab label="Customer" />
                  <Tab label="Owner" />
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={this.state.value}
                onChangeIndex={this.handleChangeIndex}
              >
                <TabContainer dir={theme.direction}>
                  <form onSubmit={handleSubmitUser.bind(this)}>
                    {/* <Paper className={classes.paper}> */}
                    <Typography variant="h6">Register as Customer</Typography>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <TextField
                          required
                          id="firstName"
                          name="firstName"
                          label="Full Name"
                          value={fullName}
                          type="text"
                          onChange={setFullName.bind(this)}
                          fullWidth
                          autoComplete="fname"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          id="email"
                          name="email"
                          label="Email"
                          value={email}
                          type="email"
                          onChange={setEmail.bind(this)}
                          fullWidth
                          autoComplete=""
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          required
                          id="Password"
                          name="Password"
                          label="Password"
                          type="password"
                          value={password}
                          type="password"
                          onChange={passwordUser.bind(this)}
                          fullWidth
                          autoComplete=""
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          required
                          id="confirmPassword"
                          name="confirmPassword"
                          label="Confirm Password"
                          type="password"
                          value={confirmPassword}
                          type="password"
                          onChange={confirmPasswordUser.bind(this)}
                          fullWidth
                          autoComplete=""
                        />
                      </Grid>
                      <Grid item xs={6}>
                        {/* <div > */}
                        <FormControl
                          component="fieldset"
                          onChange={setGender.bind(this)}
                        >
                          <FormLabel component="legend">Gender</FormLabel>
                          <RadioGroup aria-label="position" name="position" row>
                            <FormControlLabel
                              value="Male"
                              control={<Radio color="primary" />}
                              label="Male"
                              labelPlacement="end"
                              name="Male"
                            />
                            <FormControlLabel
                              value="Female"
                              control={<Radio color="primary" />}
                              label="Female"
                              labelPlacement="end"
                              name="Female"
                            />
                          </RadioGroup>
                        </FormControl>
                        {/* </div> */}
                      </Grid>
                      <Grid item sm={6} Validate>
                        <TextField
                          required
                          id="date"
                          name="confirmPassword"
                          label="Age"
                          value={age}
                          type="number"
                          onChange={ageUser.bind(this)}
                          fullWidth
                          autoComplete=""
                        />
                      </Grid>

                      <Grid item sm={6}>
                        <TextField
                          required
                          id="country"
                          name="country"
                          label="Country"
                          value={countr}
                          type="text"
                          onChange={country.bind(this)}
                          fullWidth
                          // autoComplete="billing country"
                        />
                      </Grid>
                      <Grid item sm={6}>
                        <TextField
                          required
                          id="city"
                          name="city"
                          label="City"
                          value={cit}
                          type="text"
                          onChange={city.bind(this)}
                          fullWidth
                          // autoComplete="billing address-level2"
                        />
                      </Grid>

                      <Grid item xs={12}>
                        {/* <FormControlLabel
                            control={
                              <Checkbox
                                color="secondary"
                                name="saveAddress"
                                value="yes"
                              />
                            }
                            label="Use this address for payment details"
                          /> */}
                      </Grid>
                      <br />
                      {/* </Grid> */}

                      <Button
                        type="submit"
                        value="Submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        className={classes.button}
                      >
                        Register
                      </Button>

                      {/* </Paper> */}
                    </Grid>
                  </form>
                </TabContainer>
                {/************************************************************ */}
                <TabContainer dir={theme.direction}>
                  <form onSubmit={handleSubmitAdmin.bind(this)}>
                    {/* <Paper className={classes.paper}> */}
                    <Typography variant="h6" gutterBottom>
                      Register as Resturant Owner
                    </Typography>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <TextField
                          required
                          id="firstName"
                          name="firstName"
                          label="Full Name"
                          value={fullName}
                          type="text"
                          onChange={setFullName.bind(this)}
                          fullWidth
                          autoComplete="fname"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          id="email"
                          name="email"
                          label="Email"
                          value={email}
                          type="email"
                          onChange={setEmail.bind(this)}
                          fullWidth
                          autoComplete=""
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="Password"
                          name="Password"
                          label="Password"
                          type="password"
                          value={password}
                          type="password"
                          onChange={passwordUser.bind(this)}
                          fullWidth
                          autoComplete=""
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="confirmPassword"
                          name="confirmPassword"
                          label="Confirm Password"
                          type="password"
                          value={confirmPassword}
                          type="password"
                          onChange={confirmPasswordUser.bind(this)}
                          fullWidth
                          autoComplete=""
                        />
                      </Grid>

                      {/* <Grid item xs={12}>
                      <TextField
                        id="address2"
                        name="address2"
                        label="Address"
                        fullWidth
                        autoComplete="billing address-line2"
                      />
                    </Grid> */}
                      <Grid item xs={12}>
                        <TextField
                          id="address2"
                          name="address2"
                          label="Upload Certificate"
                          type="file"
                          fullWidth
                          autoComplete="billing address-line2"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          id="city"
                          name="city"
                          label="City"
                          value={cit}
                          type="text"
                          onChange={city.bind(this)}
                          fullWidth
                        />
                      </Grid>
                      {/* <Grid item xs={12} sm={6}>
                      <TextField
                        id="state"
                        name="state"
                        label="State/Province/Region"
                        fullWidth
                      />
                    </Grid> */}
                      <br />

                      <Grid item xs={12}>
                        <TextField
                          required
                          id="country"
                          name="country"
                          label="Country"
                          value={countr}
                          type="text"
                          onChange={country.bind(this)}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          id="restName"
                          name="restName"
                          label="Resturant Name"
                          value={resturantName}
                          type="text"
                          onChange={restName.bind(this)}
                          fullWidth
                          autoComplete=""
                        />
                      </Grid>
                      {/* <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            color="secondary"
                            name="saveAddress"
                            value="yes"
                          />
                        }
                        label="Use this address for payment details"
                      />
                    </Grid> */}
                    </Grid>
                    <br />
                    <Button
                      type="submit"
                      value="Submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      className={classes.button}
                    >
                      Register
                    </Button>
                    {/* </Paper> */}
                  </form>
                </TabContainer>
              </SwipeableViews>
            </div>
          </Grid>
        </React.Fragment>
      </Router>
    );
  }
}
Signup.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Signup);
