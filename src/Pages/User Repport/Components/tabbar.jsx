import React from 'react';
import { Tabs, TabList, TabPanel, Tab } from 'react-re-super-tabs';
import tabs from './tabs.jsx';
import Requests from '../pages/Request.jsx';
import control from '../pages/userControl.jsx';
import Solved from '../pages/Solved.jsx';
export const tabbar = () => {
  return (
    <div>
      <Tabs activeTab='Requests'>
        <TabList>
          <Tab component={tabs} label='Requests' id='Requests' />
          <Tab component={tabs} label='User control' id='control' />
          <Tab component={tabs} label='Solved' id='Solved' />
        </TabList>
        <TabList>
          <TabPanel component={Requests} id='Requests' />
          <TabPanel component={control} id='control' />
          <TabPanel component={Solved} id='Solved' />
        </TabList>
      </Tabs>
    </div>
  );
};
export default tabbar;
