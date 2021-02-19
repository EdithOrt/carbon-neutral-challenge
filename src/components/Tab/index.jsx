import React from 'react';

import {Tabs} from 'antd'

const Tab = ({content}) => {
    let data = content
    console.log(data)
    const {TabPane} = Tabs
    return ( 
    <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Tab 1" key="1">
          {'content'}
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          {'content'}
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          {'content'}
        </TabPane>
    </Tabs>
     );
}
 
export default Tab;