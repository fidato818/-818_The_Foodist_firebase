import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import config from "../../configure/configFirebase";

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
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500
  },
  paper: {
    // marginTop: theme.spacing(13),
    // marginBottom: theme.spacing(4),
    margin: theme.spacing(25),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(13),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  }
  // root: {
  //   flexGrow: 1,
  //   backgroundColor: theme.palette.background.paper
  // }
});
class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  /*************************************************/

  /*************************************************/
  //   handleOnClick = () => {
  //   // some action...
  //   // then redirect
  //   this.setState({redirect: true});
  // }

  render() {
    const { classes } = this.props;
    const { email, password } = this.state;

    /*********************  ****************************/
    function handleChange(event, newValue) {
      const [value, setValue] = this.props;
      setValue(newValue);
    }
    /*************************************************/
    function setEmail(event) {
      this.setState({
        email: event.target.value
      });
    }
    /********************* password ****************************/
    function passwordUser(event) {
      this.setState({
        password: event.target.value
      });
    }
    /********************* ****************************/
    function handleSubmitLogin(event) {
      event.preventDefault();
      const { history } = this.props;
      const { email, password } = this.state;

      config
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(function() {
          console.log("Document successfully written!");
          history.push("/DashUser");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
    }
    return (
      <React.Fragment>
        <form onSubmit={handleSubmitLogin.bind(this)}>
          <Paper className={classes.paper}>
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify=""
              // style={{ minHeight: '100vh' }}
            >
              <Typography variant="h2" gutterBottom>
                Login
              </Typography>

              <Grid container spacing={3}>
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
                <Grid item xs={12}>
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
                <Grid item xs={6} />
              </Grid>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                value="Submit"
                onClick=""
                fullWidth
                className={classes.button}
              >
                Login
              </Button>
            </Grid>
          </Paper>
          ;
        </form>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Login);
