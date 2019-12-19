import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import CardContainer from '../Styles/CardContainer';
import TextField from '@material-ui/core/TextField';
import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import Filter3Icon from '@material-ui/icons/Filter3';
import PlayerList from '../Team/playerList.json';
import Header from '../Header/Header'
import Team from '../Team/Team';



const useStyles = makeStyles(theme => ({
    root: {
        margin: 'auto',
        flexGrow: 1,
        backgroundColor: '#312551'
    },
    paper: {

        overflow: 'auto',
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    button: {
        margin: theme.spacing(0.5, 0),
        color: '#ffffff',
        backgroundColor: '#E3CC32',
        width: 100,
        marginTop: 150


    },
    avalPlayer: {

        height: 400,
        width: 'auto',
        marginLeft: 30,
        marginRight: 20
    }
    

}
));

function not(a, b) {
    return a.filter(value => b.indexOf(value) === -1);
}

function intersection(a, b) {
    return a.filter(value => b.indexOf(value) !== -1);
}




export default function CreateTeam(props) {



    const classes = useStyles();
    const [checked, setChecked] = React.useState([]);
    const [left, setLeft] = React.useState(
        ["Vardy", "Rashford", "Kevin de Bruyne", "Pogba", "Otamendi", "Virgil Van Dijk", "Hugo Lloris", "Ederson"]
    );
    const [right, setRight] = React.useState([]);

    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);



    const handleToggle = value => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };



    const handleCheckedRight = () => {
        if (leftChecked.length === 5) {
            setRight(right.concat(leftChecked));
            setLeft(not(left, leftChecked));
            setChecked(not(checked, leftChecked));
        }
        else {
            return console.log('error');
        }

    };

    const handleCheckedLeft = () => {
        setLeft(left.concat(rightChecked));
        setRight(not(right, rightChecked));
        setChecked(not(checked, rightChecked));
    };


    const onSubmitHandler = () => {
        props.handler();
    }


    const customList = PlayerList => (



        <Paper className={classes.paper}>
            <List dense component="div" role="list">
                {PlayerList.map((playerName) => {
                    const labelId = `transfer-list-item-${playerName}-label`;
                    return (

                        <ListItem key={playerName} role="listitem" button onClick={handleToggle(playerName)}>
                            <ListItemIcon>
                                <Checkbox
                                    checked={checked.indexOf(playerName) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={` ${playerName}`} />
                        </ListItem>
                    );

                })}
                <ListItem />
            </List>
        </Paper>

    );


    return (
        <div>



            <div className={classes.root}>
                <div className='boxForCard'>
                    <Grid container spacing={2} style={{ height: '100%' }}>
                        <Grid item xs={3}>
                            <Paper className={classes.paper} style={{ height: '99%' }}><h2>1. Create Team</h2>
                                <br></br>
                                <br></br>
                                <br></br>
                                <form>
                                    <div>
                                        <TextField id="standard-basic" label="Enter your team name"></TextField>
                                    </div>
                                </form>
                                <List component="nav" aria-label="main mailbox folders" >
                                    <ListItem button>
                                        <ListItemIcon>
                                            <Filter1Icon />
                                        </ListItemIcon>
                                        <ListItemText primary="Enter your Team's Name" />
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <Filter2Icon />
                                        </ListItemIcon>
                                        <ListItemText primary="Choose your players" />
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <Filter3Icon />
                                        </ListItemIcon>
                                        <ListItemText primary="Submit after selecting players" />
                                    </ListItem>
                                </List>
                                <div>
                                    <br></br>
                                    <br></br>
                                </div>
                            </Paper>

                            <Paper className="cardTail" />
                        </Grid>

                        <Grid item xs={4}>
                            <Paper className={classes.paper} style={{ height: '99%' }} > <h2>2. Available Players</h2>
                                <p>(Select 5 players)</p>
                                <div className={classes.avalPlayer}>
                                    {customList(left)}
                                </div>
                            </Paper>
                            <Paper className="cardTail" />
                        </Grid>

                        <Grid item xs={1}>

                            <div>
                                <Grid container direction="column" alignItems="center">

                                    <Button
                                        variant="outlined"
                                        size="small"
                                        className={classes.button}
                                        onClick={handleCheckedRight}
                                        disabled={leftChecked.length === 0}
                                        aria-label="move selected right"
                                    >
                                        Transfer IN
</Button>
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        className={classes.button}
                                        onClick={handleCheckedLeft}
                                        disabled={rightChecked.length === 0}
                                        aria-label="move selected left"
                                    >
                                        Transfer Out
</Button>

                                </Grid>


                            </div>

                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={classes.paper} style={{ height: '99%' }}> <h2>3. Your team</h2>
                                <br></br>
                                <br></br>
                                <div className={classes.avalPlayer} >
                                    {customList(right)}
                                    <br />
                                    <Button
                                        onClick={() => {props.handler()}}
                                        disabled={right.length != 5 }
                                        variant="contained"
                                        style={{color: '#fff',
                                        backgroundColor:'#312551'}}>
                                        Submit
                                    </Button>
                                </div>
                                
                            </Paper>

                            <Paper className="cardTail" />
                        </Grid>

                    </Grid>
                </div>


            </div>
        </div>
    )

}



