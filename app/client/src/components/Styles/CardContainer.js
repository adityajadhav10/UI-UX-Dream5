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

const CardContainer = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className='boxForCard'>
                <Grid container spacing={2} style={{height:'100%'}}>
                <Grid item  xs={12}>
    <Paper className={classes.paper} style={{height:'99%'}}>{props.children}</Paper>
                    <Paper className="cardTail" />
                </Grid>
                
                </Grid>
            </div>      
        </div>
    )
}

export default CardContainer
