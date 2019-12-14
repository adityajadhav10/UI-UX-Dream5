import React from 'react'
import './../Styles/common.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TeamStandingsOverviewPage from '../Standings/Team-Standings-Overview-Page';

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
            <div className='boxForCard'>
                <Grid container spacing={2} style={{height:'100%'}}>
                <Grid item  xs={5}>
                    <Paper className={classes.paper} style={{height:'99%'}}>
                    <div className="cardTitle">
                        View Team 
                        </div>
                        </Paper>
                    <Paper className="cardTail" />
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper} style={{height:'48%'}}>
                        <div>
                        <div className="cardTitle">
                            Next Fixture
                        </div>

                        <div className="nextFixture">
                            <div>United</div>
                        
                            <div className="teamFlag1" />
                           <b style={{fontSize:"24px"}}>vs</b> 
                           <div>City </div>
                           
                            <div className="teamFlag2" />
                        </div>
                        
                        </div>
                        
                        </Paper>
                    <Paper className="cardTail" style={{marginBottom : '12px'}}/>
                    <Paper className={classes.paper} style={{height:'48%'}}>
                    <div className="cardTitle">
                        Points
                        </div>
                        </Paper>
                    <Paper className="cardTail" />
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper} style={{height:'99%'}}>
                    <div className="cardTitle">
                    <TeamStandingsOverviewPage></TeamStandingsOverviewPage>
                        </div>
                        </Paper>
                    <Paper className="cardTail" />
                </Grid>
                </Grid>
            </div>      
        </div>
    )
}

export default Overview