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
                            <div style={{paddingRight:"18px"}}>United
                        
                            <div className="teamFlag1" /> </div>
                           <b style={{fontSize:"24px"}}>vs</b> 
                           <div style={{paddingLeft:"18px"}}>City 
                           
                            <div className="teamFlag2" /> </div>
                        </div>

                        <div className="locationFixture">
                            <div>
                               <div style={{paddingBottom:"8px"}}> <i>Wembley , London</i> </div>
                                <div style={{ border: "1px solid #707070",padding:"8px"}}><b>20 : 30 GMT</b></div>
                             </div>
                        
                        </div>
                        </div>
                        
                        </Paper>
                    <Paper className="cardTail" style={{marginBottom : '12px'}}/>
                    <Paper className={classes.paper} style={{height:'48%'}}>
                    <div className="cardTitle">
                        Points
                        </div>

                        <div className="borderPoints">
                            Rising Stars
                        </div>
                        <div className="pointsBar">
                                <div className="alignLeftPoints">
                                    <div>100</div>
                                    <div>Pts</div>
                                </div>
                                <div className="alignRightPoints">
                                    <div style={{marginBottom:'8px'}}>Gameweek Rank : 1</div>
                                    <div style={{marginBottom:'8px'}}>Gameweek No. : 19</div>
                                    <div>Transfers : 1</div>
                                </div>
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