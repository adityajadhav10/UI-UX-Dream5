import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, Divider } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { Link } from 'react-router-dom';
import './../Styles/common.css'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
     
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 2,
    textAlign : "initial",
    fontStyle : "italic",
    color : "#ffffff"
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className="navBarColor">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <img src={require('./../../../public/dream5d.png')} height="40px" style={{paddingBottom:'8px',paddingRight:'6px'}}/>
            Dream<b style={{color:'#E3CC32'}}>5</b>
          </Typography>
          <Button color="inherit">
          <AccountCircleIcon style={{marginRight: '8px'}}/>
           Kingsman
           </Button>
              <div style={{ borderRight: '0.11em solid white',
                  padding: '8px',
                  marginRight: '18px',
                  height: '20px'
              }} />
         
         <Link to="/" style={{color: '#fff'}}><PowerSettingsNewIcon /> </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

