import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
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
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  chip: {
    marginRight: theme.spacing(1)
  }
});

function handleClick() {
  alert("You clicked! Juices / smoothies.");
}
class DashUser extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [
        {
          name: "Pizza Hut",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          categories: "Pizza"
        },
        {
          name: "BBQ Tonight",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          categories: "BBQ"
        },
        {
          name: "California Pizza",
          calories: 262,
          fat: 16.0,
          carbs: 24,
          protein: 6.0,
          categories: "Pizza"
        },
        {
          name: "Big Thick Burgers",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          categories: "Burger & Fries"
        },
        {
          name: "China Grills",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          categories: "Chinese"
        }
      ],
      // list: [],
      result: [],
      textSearch: ""
    };
  }

  /*================================================================= */

  search(e) {
    const { list } = this.state;
    const textSearch = e.target.value;
    // console.log(list)
    const result = list.filter(elem => {
      // return elem.name.substring(0, textSearch.length).toUpperCase() == textSearch.toUpperCase()
      return elem.name.toLowerCase().indexOf(textSearch) >= 0;
    });
    this.setState({
      result,
      textSearch
    });
  }
  /*================================================================= */
  pizza(e) {
    const { list } = this.state;
    const textSearch = "pizza";
    // console.log(list)
    const result = list.filter(elem => {
      // return elem.name.substring(0, textSearch.length).toUpperCase() == textSearch.toUpperCase()
      return elem.name.toLowerCase().indexOf(textSearch) >= 0;
    });
    this.setState({
      result,
      textSearch
    });
  }
  /*================================================================= */
  bbq(e) {
    const { list } = this.state;
    const textSearch = "bbq";
    // console.log(list)
    const result = list.filter(elem => {
      // return elem.name.substring(0, textSearch.length).toUpperCase() == textSearch.toUpperCase()
      return elem.name.toLowerCase().indexOf(textSearch) >= 0;
    });
    this.setState({
      result,
      textSearch
    });
  }
  /*================================================================= */
  all(e) {
    const { list } = this.state;
    const textSearch = "";
    // console.log(list)
    const result = list.filter(elem => {
      // return elem.name.substring(0, textSearch.length).toUpperCase() == textSearch.toUpperCase()
      return elem.name.toLowerCase().indexOf(textSearch) >= 0;
    });
    this.setState({
      result,
      textSearch
    });
  }
  /*================================================================= */
  render() {
    const { classes, theme } = this.props;

    /* */
    /* ********************************/
    const { list, textSearch, result } = this.state;
    const { history } = this.props;
    const arr = textSearch.length ? result : list;
    console.log(result);
    console.log(arr);

    // function handleSubmitRequest(event) {
    //   event.preventDefault();
    //   // const { history } = this.props;

    //   console.log("succes");
    //   history.push("./MyRequests");

    //   //     .catch(function (error) {
    //   //       console.error("Error writing document: ", error);
    //   //     });
    //   // });
    // }
    return (
      <React.Fragment>
        <div className={classes.root}>
          {/* <AppBar color="inherit" position="absolute">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                818' The Foodist
              </Typography>

              <Button color="inherit">Resturant</Button>
              <Button color="inherit">My Request</Button>
              <div className={classes.sectionMobile}>
                <IconButton
                  edge="end"
                  aria-label="Account of current user"
                  aria-controls="{menuId}"
                  aria-haspopup="true"
                  onClick="{handleProfileMenuOpen}"
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>{" "}
                <Typography variant="caption" display="Inline" gutterBottom>
                  adnan ahmed
                </Typography>
              </div>
            </Toolbar>
          </AppBar> */}
        </div>
        <br />
        <Grid
          container
          alignItems="flex-start"
          justify="flex-end"
          direction="row"
        >
          {/* <Button color="accent" >Resturant</Button> */}
          {/* <form onSubmit={handleSubmitRequest.bind(this)}> */}
          <Button
            color="primary"
            onClick={() => {
              history.push("/MyRequests");
            }}
          >
            My Request
          </Button>
          {/* </form> */}
        </Grid>
        <TextField
          id="standard-full-width"
          label="Search Here"
          style={{ marginRight: 7 }}
          placeholder="Example i-e Kaybees, Kababjee,  BBQ Tonight etc..."
          helperText=""
          onChange={this.search.bind(this)}
          fullWidth
          margin="normal"
        />
        <Chip
          color="primary"
          size="small"
          label="all"
          className={classes.chip}
          onClick={this.all.bind(this)}
        />
        <Chip
          color="primary"
          size="small"
          label="Chinese"
          className={classes.chip}
        />
        <Chip
          color="primary"
          size="small"
          label="BBQ"
          className={classes.chip}
          onClick={this.bbq.bind(this)}
        />
        <Chip
          color="primary"
          size="small"
          label="pizza"
          onClick={this.pizza.bind(this)}
          className={classes.chip}
        />
        <Chip
          color="primary"
          size="small"
          label="B.B.Q's"
          className={classes.chip}
        />
        <br /> <br />
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Table className={classes.table} size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Resturant Name</TableCell>
                  <TableCell align="center">Calories</TableCell>
                  <TableCell align="center">Fat&nbsp;(g)</TableCell>
                  <TableCell align="center">Categories</TableCell>
                  <TableCell align="center">Rating</TableCell>
                  <TableCell align="center">Protein&nbsp;(g)</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {arr.map((list, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {list.name}
                    </TableCell>
                    <TableCell align="center">{list.calories}</TableCell>
                    <TableCell align="center">{list.fat}</TableCell>
                    <TableCell align="center">
                      <Chip
                        color="secondary"
                        size="small"
                        label={list.categories}
                      />

                      {/* <Chip color="secondary" size="small" label="Pizza" /> */}
                    </TableCell>
                    <TableCell align="center">
                      <Rating
                        value={4}
                        max={5}
                        onChange={value =>
                          console.log(`Rated with value ${value}`)
                        }
                      />
                    </TableCell>
                    <TableCell align="center">{list.protein}</TableCell>
                    <TableCell align="center">
                      <div>
                        <Button
                          variant="contained"
                          size="small"
                          color="primary"
                          className={classes.margin}
                          onClick={() => {
                            history.push("/OrderDetails");
                          }}
                        >
                          Details
                        </Button>
                        {/* <Dialog
                          open="{open}"
                          TransitionComponent={Transition}
                          keepMounted
                          onClose="{handleClose}"
                          aria-labelledby="alert-dialog-slide-title"
                          aria-describedby="alert-dialog-slide-description"
                        >
                          <DialogTitle id="alert-dialog-slide-title">
                            {"Pizza Details"}
                          </DialogTitle>
                          <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Donec risus neque, placerat a vestibulum
                              eget, fringilla sed elit. Nam eget ex at libero
                              dignissim finibus non at lorem. Praesent
                              condimentum volutpat sapien, id tincidunt nibh
                              posuere sollicitudin. Fusce ultrices eros orci, et
                              volutpat dolor elementum nec. Suspendisse feugiat
                              tempus dolor, sed blandit risus convallis sed.
                              Integer ultrices, ante non ultrices molestie,
                              tellus sapien dignissim leo, nec bibendum lorem
                              eros eu metus. Nullam laoreet quam ut est
                              consectetur, a feugiat tortor rhoncus. Mauris
                              maximus et nisi in congue. Praesent lacinia neque
                              nec pharetra laoreet. Nam nibh ligula, vestibulum
                              eget diam ut, porta viverra felis.
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleClose} color="primary">
                              Close
                            </Button>
                            <Button onClick={handleClose} color="primary">
                              Chat
                            </Button>
                            <Button onClick={handleClose} color="primary">
                              Deliver
                            </Button>
                          </DialogActions>
                        </Dialog> */}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </div>
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(DashUser);
