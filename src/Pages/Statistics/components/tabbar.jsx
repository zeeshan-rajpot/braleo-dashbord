import React from 'react';
import { Tabs, TabList, TabPanel, Tab } from 'react-re-super-tabs';
import tabs from './tabs.jsx';
import General from '../pages/Generaldata.jsx';
import User from '../pages/Userdata.jsx';
export const tabbar = () => {
  return (
    <div>
      <Tabs activeTab='General'>
        <TabList>
          <Tab component={tabs} label='General data' id='General' />
          <Tab component={tabs} label='User Data' id='User' />
        </TabList>
        <TabList>
          <TabPanel component={General} id='General' />
          <TabPanel component={User} id='User' />
        </TabList>
      </Tabs>
    </div>
  );
};
export default tabbar;
