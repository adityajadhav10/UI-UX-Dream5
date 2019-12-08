import React from 'react'
import './../Styles/common.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#312551',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },

}));

const Overview = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className='alignMargin'>
                <Grid container spacing={2} style={{height:'100%'}}>
                <Grid item  xs={5}>
                    <Paper className={classes.paper} style={{height:'99%'}}>View Team</Paper>
                    <Paper className="cardTail" />
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper} style={{height:'48%'}}>Fixtures</Paper>
                    <Paper className="cardTail" style={{marginBottom : '12px'}}/>
                    <Paper className={classes.paper} style={{height:'48%'}}>Points</Paper>
                    <Paper className="cardTail" />
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper} style={{height:'99%'}}>Standings</Paper>
                    <Paper className="cardTail" />
                </Grid>
                </Grid>
            </div>      
        </div>
    )
}

export default Overview
