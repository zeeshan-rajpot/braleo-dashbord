import React from 'react';
import { Tabs, TabList, TabPanel, Tab } from 'react-re-super-tabs';
import tabs from './Tabs.jsx';
import Active from '../pages/activePlans.jsx';
import Create from '../pages/createNew.jsx';
import User from '../pages/userCredits.jsx';
export const tabBar = () => {
  return (
    <div>
      <Tabs activeTab='Active'>
        <TabList>
          <Tab component={tabs} label='Active Plans' id='Active' />
          <Tab component={tabs} label='Create new' id='Create' />
          <Tab component={tabs} label='User Credits' id='User' />
        </TabList>
        <TabList>
          <TabPanel component={Active} id='Active' />
          <TabPanel component={Create} id='Create' />
          <TabPanel component={User} id='User' />
        </TabList>
      </Tabs>
    </div>
  );
};
export default tabBar;
