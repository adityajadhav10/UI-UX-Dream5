import React from 'react'
import PropTypes from 'prop-types'
import CardContainer from '../Styles/CardContainer';
import CreateTeam from './createTeam';
import ViewTeam from './viewTeam';

class Team extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isTeamPresent: true,
        };
        this.handler = this.handler.bind(this)
    }

    handler(isTeamPresent) {
        this.setState({ isTeamPresent: !isTeamPresent });
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
