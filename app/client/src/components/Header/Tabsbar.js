import React from 'react'
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import Overview from '../Dashboard/Overview';
import Statistics from '../Statistics/Statistics';
import ViewTeam from '../Team/ViewTeam';
import Fixtures from '../Fixtures/Fixtures';
import Fanstore from '../Fanstore/Fanstore';

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
                <TabPane tab="View Team" key="3">
                <ViewTeam />
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