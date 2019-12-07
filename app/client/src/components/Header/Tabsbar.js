import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Tabs } from 'antd';

export class Tabsbar extends Component {
    render() {
        const { TabPane } = Tabs;
        
        function callback(key) {
            console.log(key);
          }


        return (
            <div>
                <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Overview" key="1">
    Overview page
    </TabPane>
    <TabPane tab="Statistics" key="2">
    Statistics Page
    </TabPane>
    <TabPane tab="View Team" key="3">
    View Team Page
    </TabPane>
    <TabPane tab="Fixtures" key="4">
    Fixtures Page
    </TabPane>
    <TabPane tab="Fanstore" key="5">
    Fanstore Page
    </TabPane>
  </Tabs>
            </div>
        )
    }
}

export default Tabsbar

