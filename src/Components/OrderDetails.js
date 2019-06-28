import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
// import Rating from "material-ui-rating";
// import MenuIcon from "@material-ui/icons/Menu";
// import { Route, Link, BrowserRouter as Router } from "react-router-dom";
// import { Redirect } from "react-router";
import { withStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import PropTypes from "prop-types";
import data from "./data";

import config from "../configure/configFirebase";

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
  },
  card: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

function handleClick() {
  alert("You clicked! Juices / smoothies.");
}
class OrderDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      list: data,
      // list: [],
      result: [],
      pending: [],
      textSearch: ""
    };
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  onAddItem = () => {
    // not allowed AND not working
    this.setState(state => {
      const pending = state.pending.push(state);

      return {
        pending
        // value: ""
      };
    });
  };
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
  render() {
    const { classes, theme, history } = this.props;

    const { list, textSearch, result, pending } = this.state;

    const arr = textSearch.length ? result : list;
    console.log(pending);
    // console.log(list);
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
        <Button
          color="primary"
          onClick={() => {
            history.push("/MyRequests");
          }}
        >
          My Request
        </Button>
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
          <Grid container spacing={3}>
            {arr.map((e, index) => {
              return (
                <Grid item xs={12} sm={4}>
                  <Card className={classes.card}>
                    <CardHeader
                      avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                          R
                        </Avatar>
                      }
                      action={
                        <IconButton>
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title={e.name}
                      subheader="September 14, 2016"
                    />
                    <CardMedia
                      className={classes.media}
                      image={e.img}
                      title="Paella dish"
                    />
                    <CardContent>
                      <Typography component="p">{}</Typography>
                    </CardContent>
                    <CardActions
                      className={classes.actions}
                      disableActionSpacing
                    >
                      <IconButton
                        aria-label="Add to favorites"
                        onClick={() => {
                          history.push("/OrderReady");
                        }}
                      >
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton aria-label="Share">
                        <ShareIcon />
                      </IconButton>
                      <IconButton
                        className={
                          (classes.expand,
                          {
                            [classes.expandOpen]: this.state.expanded
                          })
                        }
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more"
                      >
                        <ExpandMoreIcon />
                      </IconButton>
                    </CardActions>
                    <Collapse
                      in={this.state.expanded}
                      timeout="auto"
                      unmountOnExit
                    >
                      <CardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>{}</Typography>
                        <Typography paragraph>{}</Typography>
                        <Typography paragraph>{}</Typography>
                        <Typography>{}</Typography>
                      </CardContent>
                    </Collapse>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}
OrderDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OrderDetails);
