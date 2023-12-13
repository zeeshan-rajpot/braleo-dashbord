import React from 'react';
import { Tabs, TabList, TabPanel, Tab } from 'react-re-super-tabs';
import NewsTab from './Newtabs.jsx';
import Active from '../page/Activeposts.jsx';
import Scheduled from '../page/Scheduledposts.jsx';
import Inactive from '../page/Inactiveposts.jsx';
export const Tabbar = () => {
  return (
    <div>
      <Tabs activeTab='Active'>
        <TabList>
          <Tab component={NewsTab} label='Active posts' id='Active' />
          <Tab component={NewsTab} label='Scheduled posts' id='Scheduled' />
          <Tab component={NewsTab} label='Inactive posts' id='Inactive' />
        </TabList>
        <TabList>
          <TabPanel component={Active} id='Active' />
          <TabPanel component={Scheduled} id='Scheduled' />
          <TabPanel component={Inactive} id='Inactive' />
        </TabList>
      </Tabs>
    </div>
  );
};
export default Tabbar;
