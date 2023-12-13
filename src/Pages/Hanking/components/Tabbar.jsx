import React from 'react';
import { Tabs, TabList, TabPanel, Tab } from 'react-re-super-tabs';
import tabs from './tabs.jsx';
import Hanking from '../pages/Hanking.jsx';
import Status from '../pages/Status.jsx';
export const Tabbar = () => {
  return (
    <div>
      <Tabs activeTab='Hanking'>
        <TabList>
          <Tab component={tabs} label='Hanking users' id='Hanking' />
          <Tab component={tabs} label='Hanking status' id='Status' />
        </TabList>
        <TabList>
          <TabPanel component={Hanking} id='Hanking' />
          <TabPanel component={Status} id='Status' />
        </TabList>
      </Tabs>
    </div>
  );
};
export default Tabbar;
