import React from 'react'
import PropTypes from 'prop-types'
import CardContainer from '../Styles/CardContainer';
import '../Styles/common.css'
import { Table } from 'antd';
import 'antd/dist/antd.css';
import { Link, Button } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

class TeamStandings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            teams: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:8000/team-standings")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        teams: result
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
        const { error, isLoaded, teams } = this.state;
        const { Column } = Table;
        if (error) {
            return (<div> Error : Data Not Available</div>)
        } else if (!isLoaded) {
            return (<div>Loading ...</div>)
        } else {
            return (
                <CardContainer>
                    <div className="card-title">
                        <table width='90%'>
                            <tr>
                                <td><Link href="/dashboard"><ArrowBackIosIcon /></Link></td>
                                <td>Team Standings</td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                    <Table dataSource={teams} className="table">
                        <Column title="Rank" dataIndex="rank" key="rank" />
                        <Column title="User" dataIndex="user" key="user" />
                        <Column title="Team Name" dataIndex="teamName" key="teamName" />
                        <Column title="Game Week" dataIndex="gameWeek" key="gameWeek" />
                        <Column title="Total" dataIndex="totalPoints" key="totalPoints" />
                    </Table>,
                    </CardContainer>
            )
        }
    }
}

TeamStandings.propTypes = {}

export default TeamStandings
