import React from 'react';
import { Tabs, TabList, TabPanel, Tab } from 'react-re-super-tabs';
import tabs from './tabs.jsx';
import Internal from '../pages/Internal.jsx';
import Illustrations from '../pages/Illustrations.jsx';
export const tabbar = () => {
  return (
    <div>
      <Tabs activeTab='Internal'>
        <TabList>
          <Tab component={tabs} label='Internal users' id='Internal' />
          <Tab component={tabs} label='Illustrations' id='Illustrations' />
        </TabList>
        <TabList>
          <TabPanel component={Internal} id='Internal' />
          <TabPanel component={Illustrations} id='Illustrations' />
        </TabList>
      </Tabs>
    </div>
  );
};
export default tabbar;
