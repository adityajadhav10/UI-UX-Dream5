import React from 'react'
import './../Styles/common.css'
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Button from '@material-ui/core/Button';

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
    table: {
        width: '750px',
        marginTop: '24px',
        marginLeft: '42px'
    },
    image1: {
        width: '420px',
        paddingTop: '24px',
        paddingBottom:'12px',
        height: '481px'
    },
    button: {
        color: '#fff',
        backgroundColor:'#312551'
    }

}));

function createData(KitNo, PlayerName, Position, Team, Points) {
    return { KitNo, PlayerName, Position, Team, Points };
}

const rows = [
    createData(1, 'Hugo Lorris', 'GK', 'TOT', 50),
    createData(2, 'Pogba', 'CAM', 'MU', 50),
    createData(3, 'Virgil Van dijk', 'CB', 'LP', 50),
    createData(4, 'Otamendi', 'CB', 'MC', 50),
    createData(5, 'Vardy', 'ST', 'LC', 50),
];



const ViewTeam = () => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 5));
        setPage(0);
    };

    return (
        <div className={classes.root}>
            <div className='boxForCard'>
                <Grid container spacing={2} style={{ height: '100%' }}>
                    <Grid item xs={5}>
                        <Paper className={classes.paper} style={{ height: '99%' }}>
                            <h2>Rising Stars</h2>
                            <div >
                                <img className={classes.image1} src={require('../Team/lineup.png')} />
                                <div>
                                <Button href="/createTeam" className={classes.button}>Edit Team</Button>
                                </div>
                            </div>

                        </Paper>

                        <Paper className="cardTail" />
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper} style={{ height: '99%' }}><h2>Gameweek Points</h2>
                        <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>

                                        <TableCell >Kit No.</TableCell>
                                        <TableCell >Player name</TableCell>
                                        <TableCell >Position</TableCell>
                                        <TableCell >Team</TableCell>
                                        <TableCell >Points</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map(row => (
                                        <TableRow key={row.KitNo}>

                                            <TableCell >{row.KitNo}</TableCell>
                                            <TableCell >{row.PlayerName}</TableCell>
                                            <TableCell >{row.Position}</TableCell>
                                            <TableCell >{row.Team}</TableCell>
                                            <TableCell >{row.Points}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <div>
                                <TablePagination
                                    rowsPerPageOptions={[5]}
                                    component="div"
                                    count={rows.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onChangePage={handleChangePage}
                                    onChangeRowsPerPage={handleChangeRowsPerPage}
                                />
                            </div>
                        </Paper>



                        <Paper className="cardTail" style={{ marginBottom: '12px' }} />

                    </Grid>
                </Grid>
            </div>


        </div>
    )
}

export default ViewTeam
