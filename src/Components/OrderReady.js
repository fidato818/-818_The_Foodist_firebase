import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
// import firebase from "firebase";
import config from "../configure/configFirebase";
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
class OrderReady extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      quant: "",
      status: ""
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
    const { email, password, quant } = this.state;

    /*********************  ****************************/
    function handleChange(event, newValue) {
      const [value, setValue] = this.props;
      setValue(newValue);
    }
    /*************************************************/
    function setEmail(event) {
      this.setState({
        name: event.target.value
      });
    }
    /********************* password ****************************/
    function asd(event) {
      this.setState({
        state: event.target.value
      });
    }
    /********************* password ****************************/
    function quantity(event) {
      this.setState({
        quant: event.target.value
      });
    }
    /********************* ****************************/
    // function handleSubmitLogin(event) {
    //   event.preventDefault();
    //   const { history } = this.props;
    //   const { email, password } = this.state;

    //   firebase
    //     .auth()
    //     .signInWithEmailAndPassword(email, password)
    //     .then(function() {
    //       console.log("Document successfully written!");
    //       history.push("/DashUser");
    //     })
    //     .catch(function(error) {
    //       console.error("Error writing document: ", error);
    //     });
    // }
    /*************************************************/

    function orderSubmit(event) {
      event.preventDefault();
      // const { history } = this.props;
      const { name, state, quant, status } = this.state;
      var newPostKey = config
        .database()
        .ref()
        .child("Order")
        .push().key;
      config
        .database()
        .ref("Order/")
        .push({
          name,
          state,
          quant,
          newPostKey,
          status: "pending"
        });
      console.log("DATA SAVED").then(function() {
        console.log("Document successfully written!");
      });
      // .then(function() {
      //   name: '',
      //   state:'',
      //   quant: ''
      // })

      // db.collection("")
      //   // .doc("pending")

      //   .then(function() {
      //     console.log("Document successfully written!");
      //   })
      //   .catch(function(error) {
      //     console.error("Error writing document: ", error);
      //   });
    }
    return (
      <React.Fragment>
        <form onSubmit={orderSubmit.bind(this)}>
          <Paper className={classes.paper}>
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify=""
              // style={{ minHeight: '100vh' }}
            >
              <Typography variant="h5" gutterBottom>
                Order Ready
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={12}>
                  {/* <TextField
                    required
                    id="email"
                    name="email"
                    label="Email"
                    value={email}
                    type="text"
                    onChange={setEmail.bind(this)}
                    fullWidth
                    autoComplete=""
                  /> */}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="Password"
                    name="Password"
                    label=""
                    type="text"
                    value={password}
                    onChange={asd.bind(this)}
                    fullWidth
                    autoComplete=""
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="Password"
                    name="Password"
                    label=""
                    type="text"
                    value={quant}
                    onChange={quantity.bind(this)}
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
                Submit Order
              </Button>
            </Grid>
          </Paper>
          ;
        </form>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(OrderReady);
