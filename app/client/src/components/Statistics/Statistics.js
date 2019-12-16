import React from 'react'
import CardContainer from '../Styles/CardContainer';
import '../Styles/common.css'
import { Table } from 'antd';
import PlayerProfile from '../PlayerProfile/PlayerProfile';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';

class Statistics extends React.Component {
    //state = { visible: false };
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: [],
            visible: false
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
                        data: result
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
            <div className="card-title">
                <div className="cardTitle">{title}</div>
            </div>
        );
    }

    playerPopup(child) {
        // console.log('child === ', child);
        // Impl for popup details
        alert('jj');
        return (
            <PlayerProfile></PlayerProfile>
        );
    }

    showModal() {
        this.setState({
          visible: true,
        });
      };
    
      handleOk() {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
      handleCancel() {
        console.log(e);
        this.setState({
          visible: false,
        });
      };

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
                            <div>
                            <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
                                <div className="column">
                                    <Table dataSource={data} className="table" style={{ width: "90%"}}
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
                                            sorter={ (a, b) => a.goals - b.goals}
                                            defaultSortOrder="descend"/>
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
                                            sorter={ (a, b) => a.assists - b.assists}
                                            defaultSortOrder="descend"/>
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
                                            sorter={ (a, b) => a.cleanSheets - b.cleanSheets}
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
