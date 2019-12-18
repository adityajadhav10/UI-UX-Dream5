import React, { Component } from 'react';
import CardContainer from '../Styles/CardContainer';
import '../Styles/common.css'
import { Table } from 'antd';
import 'antd/dist/antd.css';
import PlayerProfileDialog from '../PlayerProfile/PlayerProfile';

class Statistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
      visible: false,
      playerName: ''
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/player-statistics")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            error: false,
            isLoaded: true,
            data: result,
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

  getHeader(title) {
    return (
        <div className="cardTitle2">{title}</div>
    );
  }

  playerPopup(child) {
    this.setState({
      visible: true,
      playerName: child.playerName.toLowerCase()
    });
  }

  render() {
    const { error, isLoaded, data } = this.state;
    const { Column } = Table;
    if (error) {
      return (<div> Error : Data Not Available</div>)
    } else if (!isLoaded) {
      return (<div>Loading ...</div>)
    } else {
      return (
        <div>
          <CardContainer >
            {this.state.visible ?
              <PlayerProfileDialog open={this.state.visible} playerName={this.state.playerName} closePopup={() => { this.setState({ visible: false }) }}></PlayerProfileDialog> :
              ''}
            <div>
              <div className="column">
                <Table dataSource={data} className="table" style={{ width: "90%" }}
                  onRowClick={(details) => this.playerPopup(details)}
                  title={() => this.getHeader("Goals")}
                  pagination={false}>

                  <Column title="Team" dataIndex="teamLogo" key="teamLogo"
                    render={
                      (teamLogo) => <img
                        style={{ height: "25px", width: "25px" }}
                        src={require('../../../public/team-logos/' + teamLogo)}>
                      </img>
                    } />
                  <Column title="Name" dataIndex="playerName" key="playerName" />
                  <Column title="Goals" dataIndex="goals" key="goals"
                    sorter={(a, b) => a.goals - b.goals}
                    defaultSortOrder="descend" />
                </Table>
              </div>
              <div className="column">
                <Table dataSource={data} className="table" style={{ width: "90%" }}
                  onRowClick={(details) => this.playerPopup(details)}
                  title={() => this.getHeader("Assists")}
                  pagination={false}>

                  <Column title="Team" dataIndex="teamLogo" key="teamLogo"
                    render={
                      (teamLogo) => <img
                        style={{ height: "25px", width: "25px" }}
                        src={require('../../../public/team-logos/' + teamLogo)
                        }>
                      </img>} />
                  <Column title="User" dataIndex="playerName" key="playerName" />
                  <Column title="Assists" dataIndex="assists" key="assists"
                    sorter={(a, b) => a.assists - b.assists}
                    defaultSortOrder="descend" />
                </Table>
              </div>
              <div className="column">
                <Table dataSource={data} className="table"
                  onRowClick={(details) => this.playerPopup(details)}
                  title={() => this.getHeader("Clean Sheets")}
                  pagination={false}>

                  <Column title="Team" dataIndex="teamLogo" key="teamLogo"
                    render={
                      (teamLogo) => <img
                        style={{ height: "25px", width: "25px" }}
                        src={require('../../../public/team-logos/' + teamLogo)
                        }>
                      </img>} />
                  <Column title="User" dataIndex="playerName" key="playerName" />
                  <Column title="CS" dataIndex="cleanSheets" key="cleanSheets"
                    sorter={(a, b) => a.cleanSheets - b.cleanSheets}
                    defaultSortOrder="descend" />
                </Table>
              </div>
            </div>
          </CardContainer>
        </div>

      )
    }
  }
}

Statistics.propTypes = {}

export default Statistics
