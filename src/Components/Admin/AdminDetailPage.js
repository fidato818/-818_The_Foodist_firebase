import React from "react";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
// import AccountCircle from "@material-ui/icons/AccountCircle";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import MenuIcon from "@material-ui/icons/Menu";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import ButtonBase from "@material-ui/core/ButtonBase";
import Icon from "@material-ui/core/Icon";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const images = [
  {
    url:
      "data:image/jpeg;base64,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",
    title: "Breakfast",
    width: "33%"
  },
  {
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcMNh2WBvGVlfEXJboDKvxwblHbcWra9-OB8U2AwtLNucPdUuvMg",
    title: "Burgers",
    width: "34%"
  },
  {
    url:
      "https://abm-website-assets.s3.amazonaws.com/rdmag.com/s3fs-public/embedded_image/2017/08/Quantum_Computing_NewStudy-638-NEWS-WEB.jpg",
    title: "Camera",
    width: "33%"
  },
  {
    url:
      "data:image/jpeg;base64,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",
    title: "Breakfast",
    width: "33%"
  },
  {
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcMNh2WBvGVlfEXJboDKvxwblHbcWra9-OB8U2AwtLNucPdUuvMg",
    title: "Burgers",
    width: "34%"
  },
  {
    url:
      "https://abm-website-assets.s3.amazonaws.com/rdmag.com/s3fs-public/embedded_image/2017/08/Quantum_Computing_NewStudy-638-NEWS-WEB.jpg",
    title: "Camera",
    width: "33%"
  }
];

const useStyle = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  chip: {
    marginRight: theme.spacing(1)
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
    flexGrow: 1
  },
  image: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15
      },
      "& $imageMarked": {
        opacity: 0
      },
      "& $imageTitle": {
        border: "4px solid currentColor"
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%"
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity")
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
      6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity")
  }
}));

function handleClick(e) {
  alert("You clicked! Juices / smoothies.");
  e.preventDefault();
}

export default function Dashboard() {
  const classes = useStyle();
  const theme = useTheme();

  /* */
  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar color="inherit" position="absolute">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              818' The Foodist
            </Typography>

            <Button color="inherit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z" />
              </svg>{" "}
              Pending
            </Button>
            <Button color="inherit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z" />
              </svg>
              In Progress
            </Button>
            <Button color="inherit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>{" "}
              Delivered
            </Button>
            <div className={classes.sectionMobile}>
              {/* <IconButton
                edge="end"
                aria-label="Account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>{" "} */}
              <Button color="inherit">
                {/* <AccountCircle /> Admin */}
              </Button>
              {/* <AccountCircle /> */}
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <br />
      <br />
      <br />
      <div>
        <br />

        <CssBaseline />
        <Container maxWidth="xl">
          <div>
            <Paper elevation={0} className={classes.paper}>
              <Breadcrumbs aria-label="Breadcrumb">
                <Link color="inherit" href="/" onClick={handleClick}>
                  Dashboard
                </Link>
                <Link color="inherit" href="" onClick={handleClick}>
                  Resturant Details
                </Link>
                {/* <Typography color="textPrimary">Breadcrumb</Typography> */}
              </Breadcrumbs>
            </Paper>
          </div>
          <Typography
            variant="h1"
            component="h2"
            style={{ textAlign: "center" }}
          >
            Lorem Ipsum
          </Typography>
          <FontAwesomeIcon icon="faCoffee" />
          <br />
          <Typography variant="subtitle2" style={{ textAlign: "center" }}>
            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur
          </Typography>
          <br />
          <Typography variant="body2">
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.ur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.ur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <br />
          <div className={classes.root}>
            {images.map(image => (
              <ButtonBase
                focusRipple
                key={image.title}
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                  width: image.width
                }}
              >
                <span
                  className={classes.imageSrc}
                  style={{
                    backgroundImage: `url(${image.url})`
                  }}
                />
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    className={classes.imageTitle}
                  >
                    {image.title}
                    <span className={classes.imageMarked} />
                  </Typography>
                </span>
              </ButtonBase>
            ))}
          </div>
          <div className={classes.root}>
            {images.map(image => (
              <ButtonBase
                focusRipple
                key={image.title}
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                  width: image.width
                }}
              >
                <span
                  className={classes.imageSrc}
                  style={{
                    backgroundImage: `url(${image.url})`
                  }}
                />
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    className={classes.imageTitle}
                  >
                    {image.title}
                    <span className={classes.imageMarked} />
                  </Typography>
                </span>
              </ButtonBase>
            ))}
          </div>
          <div className={classes.root}>
            {images.map(image => (
              <ButtonBase
                focusRipple
                key={image.title}
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                  width: image.width
                }}
              >
                <span
                  className={classes.imageSrc}
                  style={{
                    backgroundImage: `url(${image.url})`
                  }}
                />
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    className={classes.imageTitle}
                  >
                    {image.title}
                    <span className={classes.imageMarked} />
                  </Typography>
                </span>
              </ButtonBase>
            ))}
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
}
