import React from 'react';

import {Tabs, Collapse} from 'antd';


const Tab = ({totalOffsets,aviableOffsets,benefits,price,description,location,type,developer,verifier,area,jobsGenerated}) => {
    const {TabPane} = Tabs;
    const { Panel } = Collapse;
    return ( 
    <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Bonos de carbono" key="1">
          <div>
            <p>{totalOffsets}</p>
            <div>
              <p>{aviableOffsets}</p>
            </div>
          </div>
          <div>
            <p>{benefits}</p>
          </div>
          <div>
            <p>{price}</p>
          </div>
        </TabPane>
        <TabPane tab="Descripción" key="2">
          <div>
            <p>{description}</p>
          </div>
        </TabPane>
        <TabPane tab="Características" key="3">
          <Collapse defaultActiveKey={['1']}>
            <Panel header="Locación" key="1">
              <p>{location}</p>
            </Panel>
            <Panel header="Tipo de proyecto" key="2">
              <p>{type}</p>
            </Panel>
            <Panel header="Desarrollador" key="3">
              <p>{developer}</p>
            </Panel>
            <Panel header="Verificador" key="4">
              <p>{verifier}</p>
            </Panel>
            <Panel header="Área" key="5">
              <p>{area}</p>
            </Panel>
            <Panel header="Trabajos generados" key="6">
              <p>{jobsGenerated}</p>
            </Panel>
          </Collapse>
        </TabPane>
    </Tabs>
     );
}
 
export default Tab;