import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
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
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";
import PropTypes from "prop-types";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";

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


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      apiKey: 'c50180b01a5ff81fa1212de5aa7ce6f7',
      apiUrl: 'https://developers.zomato.com/api/v2.1/',
      arr: [], 
      result: []
    }
  }
 

  // function getApiData(searchData) {
  //   alert(crime + " , " + force);
  //   return new Promise((resolve, reject) => {
  //     fetch(`http://opentable.herokuapp.com/api/restaurants/:${searchData}`)
  //       .then(response => response.json())
  //       .then(result => {
  //         resolve(result);
  //         // console.log(resolve(result));
  //       })
  //       .catch(err => {
  //         reject({ Message: "Something went Wrong" });
  //         console.log("Error: ", err);
  //       });
  //   });
  // }
  

 

  
  render(){
    const {classes, theme} = this.props;
    const {searchText} = this.state;
    console.log(searchText)
    /*********************************/
    
    // function handleChangeSearch(event) {
    //   const {searchText} = this.state;
    //   this.setState({
    //     searchText: event.target.value
    //   });
    // }

    function handleChangeSearch(event){
      const { arr } = this.state;
      const searchText = event.target.value;
      // console.log(arr)
      const result = arr.filter(elem => {
        console.log(arr)
        console.log(result)
        // return elem.name.substring(0, textSearch.length).toUpperCase() == textSearch.toUpperCase()
        return elem.name.toLowerCase().indexOf(searchText) >= 0;
      });
      this.setState({
        result,
        searchText
      });
    }
  /*********************************/
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
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>{" "}
                <Fab
                  variant="extended"
                  size="small"
                  color="inherit"
                  aria-label="Add"
                  className={classes.margin}
                >
                  <AccountCircle />
                  Admin
                </Fab>
              </div>
            </Toolbar>
          </AppBar> */}
        </div>
        <TextField
          id="standard-full-width"
          label="Search Here"
          style={{ marginRight: 7 }}
          placeholder="Example i-e Kaybees, Kababjee,  BBQ Tonight etc..."
          value={searchText}
          type="text"
          onChange={handleChangeSearch.bind(this)}
          helperText=""
          fullWidth
          margin="normal"
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
          label="Hamburgers"
          className={classes.chip}
        />
        <Chip
          color="primary"
          size="small"
          label="Juices / smoothies"
          onClick={handleClick.bind(this)}
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
          {/* <Paper className={classes.paper}>
            <Table className={classes.table} size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                    <TableCell align="right">
                      <div>
                        <Button
                          variant="contained"
                          size="small"
                          color="primary"
                          className={classes.margin}
                          onClick={handleClickOpen}
                        >
                          Details
                        </Button>
                        <Dialog
                          open={open}
                          TransitionComponent={Transition}
                          keepMounted
                          onClose={handleClose}
                          aria-labelledby="alert-dialog-slide-title"
                          aria-describedby="alert-dialog-slide-description"
                        >
                          <DialogTitle id="alert-dialog-slide-title">
                            {"Pizza Details"}
                          </DialogTitle>
                          <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Donec risus neque, placerat a vestibulum eget,
                              fringilla sed elit. Nam eget ex at libero dignissim
                              finibus non at lorem. Praesent condimentum volutpat
                              sapien, id tincidunt nibh posuere sollicitudin.
                              Fusce ultrices eros orci, et volutpat dolor
                              elementum nec. Suspendisse feugiat tempus dolor, sed
                              blandit risus convallis sed. Integer ultrices, ante
                              non ultrices molestie, tellus sapien dignissim leo,
                              nec bibendum lorem eros eu metus. Nullam laoreet
                              quam ut est consectetur, a feugiat tortor rhoncus.
                              Mauris maximus et nisi in congue. Praesent lacinia
                              neque nec pharetra laoreet. Nam nibh ligula,
                              vestibulum eget diam ut, porta viverra felis.
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
                        </Dialog>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
                </Paper> */}
        </div>
      </React.Fragment>
    );
  }
}
  
Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};
export default withStyles(styles, { withTheme: true })( Dashboard);
