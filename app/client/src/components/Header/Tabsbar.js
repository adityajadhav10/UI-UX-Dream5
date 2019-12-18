import React from 'react'
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import Overview from '../Dashboard/Overview';
import Statistics from '../Statistics/Statistics';
import CreateTeam from '../Team/createTeam';
import Fixtures from '../Fixtures/Fixtures';
import Fanstore from '../Fanstore/Fanstore';
import ViewTeam from '../Team/viewTeam';
import Team from '../Team/Team';

const Tabsbar = () => {
    const { TabPane } = Tabs;
    return (
        <div>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Overview" key="1">
                    <Overview />
                </TabPane>
                <TabPane tab="Statistics" key="2">
                    <Statistics />
                </TabPane>
                <TabPane tab="Team" key="3">
                    <Team />
                </TabPane>
                <TabPane tab="Fixtures" key="4">
                    <Fixtures />
                </TabPane>
                <TabPane tab="Fanstore" key="5">
                    <Fanstore />
                </TabPane>
            </Tabs>
        </div>
    )
}

export default Tabsbar