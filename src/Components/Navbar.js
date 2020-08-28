import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import TriviaCard from './TriviaCard';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import CodeIcon from '@material-ui/icons/Code';
import CommuteIcon from '@material-ui/icons/Commute';
import PetsIcon from '@material-ui/icons/Pets';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';
import PublicIcon from '@material-ui/icons/Public';
import CloudCircleIcon from '@material-ui/icons/CloudCircle';
import BookIcon from '@material-ui/icons/Book';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import BuildIcon from '@material-ui/icons/Build';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "white",
    color: "black"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [cat, setCat] = React.useState('');

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const changeCat = (x) => {
    setCat(x);
    console.log("worked");
  }

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
      <div>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Trivvvia
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
        <ListItem button key={"Starred"}>
              <ListItemIcon><DonutLargeIcon /> </ListItemIcon>
              <ListItemText onClick={() => changeCat('')}primary={"Ranked (Default)"} />
            </ListItem>
            <ListItem button key={"Starred"}>
              <ListItemIcon><BuildIcon /> </ListItemIcon>
              <ListItemText onClick={() => changeCat('&category=9')}primary={"General Knowledge"} />
            </ListItem>
            
            <ListItem button key={"Starred"}>
              <ListItemIcon><BookIcon /> </ListItemIcon>
              <ListItemText onClick={() => changeCat('&category=23')}primary={"History"} />
            </ListItem>

            <ListItem button key={"Starred"}>
              <ListItemIcon><CloudCircleIcon /> </ListItemIcon>
              <ListItemText onClick={() => changeCat('&category=20')}primary={"Mythology"} />
            </ListItem>

            <ListItem button key={"Starred"}>
              <ListItemIcon><LocalLibraryIcon /> </ListItemIcon>
              <ListItemText onClick={() => changeCat('&category=24')}primary={"Politics"} />
            </ListItem>

            <ListItem button key={"Starred"}>
              <ListItemIcon><CodeIcon /> </ListItemIcon>
              <ListItemText onClick={() => changeCat('&category=18')}primary={"Computers"} />
            </ListItem>

            <ListItem button key={"Starred"}>
              <ListItemIcon><PublicIcon /> </ListItemIcon>
              <ListItemText onClick={() => changeCat('&category=22')}primary={"Geography"} />
            </ListItem>

            <ListItem button key={"Starred"}>
              <ListItemIcon><PetsIcon /> </ListItemIcon>
              <ListItemText onClick={() => changeCat('&category=27')}primary={"Animals"} />
            </ListItem>

            <ListItem button key={"Starred"}>
              <ListItemIcon><SportsHandballIcon /> </ListItemIcon>
              <ListItemText onClick={() => changeCat('&category=21')}primary={"Sports"} />
            </ListItem>

            <ListItem button key={"Starred"}>
              <ListItemIcon><CommuteIcon /> </ListItemIcon>
              <ListItemText onClick={() => changeCat('&category=28')}primary={"Cars"} />
            </ListItem>

       

        </List>
        <Divider />
        <ListItem >
            </ListItem>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
       
      </main>
      
    </div>
    <TriviaCard cat={cat}></TriviaCard>
    </div>
  );
}