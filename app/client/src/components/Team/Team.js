import React from 'react'
import PropTypes from 'prop-types'
import CardContainer from '../Styles/CardContainer';
import CreateTeam from './createTeam';
import ViewTeam from './viewTeam';

class Team extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isTeamPresent: false,
        };
        this.handler = this.handler.bind(this)
    }

    handler() {
        fetch("http://localhost:8000/team/status",
            {
                method: 'POST',
            })
        window.location.href = "http://localhost:4000/dashboard";
    }

    componentDidMount() {
        fetch("http://localhost:8000/team/status")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isTeamPresent: result.teamCreationStatus
                    })
                }
            );
    }

    render() {

        const { isTeamPresent } = this.state;
        if (isTeamPresent) {
            return (<ViewTeam />)
        }
        else {
            return (<CreateTeam handler={this.handler} />)
        }
    }

}

export default Team
