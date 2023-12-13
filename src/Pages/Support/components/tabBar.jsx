import React from 'react';
import { Tabs, TabList, TabPanel, Tab } from 'react-re-super-tabs';
import tabs from './Tabs.jsx';
import Archived from '../pages/ArchivedChat.jsx';
import Requests from '../pages/RequestsChat.jsx';
export const tabBar = () => {
  return (
    <div>
      <Tabs activeTab='Requests'>
        <TabList>
          <Tab component={tabs} label='Requests' id='Requests' />
          <Tab component={tabs} label='Archived messages' id='Archived' />
        </TabList>
        <TabList>
          <TabPanel component={Requests} id='Requests' />
          <TabPanel component={Archived} id='Archived' />
        </TabList>
      </Tabs>
    </div>
  );
};
export default tabBar;
