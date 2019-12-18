import React from 'react'
import CardContainer from '../Styles/CardContainer';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Table } from 'antd';
import './../Styles/common.css'


class Fixtures extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameweek: 5,
            error: null,
            isLoaded: false,
            response: null
        };
    }


    componentDidMount() {
        fetch("http://localhost:8000/fixtures?gameweek=" + this.state.gameweek)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        response: result
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: false,
                        error
                    });
                }
            )
    }


    render() {
        const { error, isLoaded, gameweek, } = this.state;

        const columns = [
            {
                dataIndex: "home_team.team_name",
                key: "homeTeam",
                align: "right",
                width: 600,
            },
            {
                dataIndex: "home_team.logo",
                key: "homeTeamLogo",
                align: "center",
                render: (teamLogo) => <img
                    style={{ height: "30px", width: "30px" }}
                    src={require('../../../public/team-logos/' + teamLogo)}
                    alt="Logo" />,
                width: 250,
            },
            {
                dataIndex: "fixture_timestamp",
                key: "fixture_timestamp",
                align: "center",
                render: (time, record) => {
                    return (record.match_finished ?
                        <p><b>{record.home_team.score} - {record.away_team.score}</b></p> : <p>{time}</p>
                    )
                }
            },
            {
                dataIndex: "away_team.logo",
                key: "awayTeamLogo",
                align: "center",
                render: (teamLogo) => <img
                    style={{ height: "30px", width: "30px" }}
                    src={require('../../../public/team-logos/' + teamLogo)}
                    alt="Logo" />,
                width: 250,
            },
            {
                dataIndex: "away_team.team_name",
                key: "awayTeam",
                align: "left",
                width: 600,
            }
        ]
        if (error) {
            return (
                <div>
                    <CardContainer>
                        <div className="cardTitle">
                            <ArrowBackIosIcon /> Game Week {gameweek} <ArrowForwardIosIcon />
                        </div>
                        <div>Error : Data Not Available</div>
                    </CardContainer>
                </div>
            )
        } else if (!isLoaded) {
            return (
                <div>
                    <CardContainer>
                        <div className="cardTitle">
                            <ArrowBackIosIcon /> Game Week {gameweek} <ArrowForwardIosIcon />
                        </div>
                        <div>Loading ...</div>
                    </CardContainer>
                </div>
            )
        } else {

            const dates = this.state.response.data.dates;
            const fixtureDate = () => 'Here is title';

            return (
                <div>
                    <CardContainer>
                        <div className="cardTitle">
                            <div style={{ display: "inline-flex" }}>
                                <div><ArrowBackIosIcon /></div>
                                <div style={{ marginLeft: "50px", marginRight: "50px" }}>Game Week {gameweek}</div>
                                <div><ArrowForwardIosIcon /></div>
                            </div>
                        </div>
                        <div style={{ width: "70%", marginLeft: "250px" }}>
                            {
                                dates.map((date, key) =>
                                    <Table
                                        key={key}
                                        columns={columns}
                                        dataSource={date.fixtures}
                                        className="fixtures-table"
                                        size="middle"
                                        pagination={false}
                                        title={() => date.date}
                                        showHeader={false}>
                                    </Table>
                                )
                            }
                        </div>
                    </CardContainer>
                </div>
            )
        }
    }
}

Fixtures.propTypes = {

}

export default Fixtures
