import React from 'react'
import '../Styles/common.css'
import { Table } from 'antd';
import 'antd/dist/antd.css';
import { Link, Button } from '@material-ui/core';

class TeamStandingsOverviewPage extends React.Component {
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
                        teams: result.slice(0, 7)
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
                <div>
                    <div className="card-title">Team Standings</div>
                    <Table dataSource={teams} pagination={false} >
                        <Column title="Rank" dataIndex="rank" key="rank" />
                        <Column title="Team Name" dataIndex="teamName" key="teamName" />
                        <Column title="Total" dataIndex="totalPoints" key="totalPoints" />
                    </Table>,
                    <div className="view-more-link">
                        <Link href="/team-standings"> View More </Link>
                    </div>
                </div>
            )
        }



    }

}

TeamStandingsOverviewPage.propTypes = {

}

export default TeamStandingsOverviewPage
