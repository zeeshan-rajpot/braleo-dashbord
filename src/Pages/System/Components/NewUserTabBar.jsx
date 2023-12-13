import React from 'react';
import { Tabs, TabList, TabPanel, Tab } from 'react-re-super-tabs';
import tabs from '../Components/tabs.jsx';
import CreateNewUser from '../pages/CreateNewUser.jsx';
import IllustrationsUser from '../pages/CreateIllustrationsUser.jsx';
export const NewUserTabBar = () => {
  return (
    <div>
      <Tabs activeTab='Users'>
        <TabList>
          <Tab component={tabs} label='Users' id='Users' />
          <Tab component={tabs} label='Illustrations' id='IllustrationsUser' />
        </TabList>
        <TabList>
          <TabPanel component={CreateNewUser} id='Users' />
          <TabPanel component={IllustrationsUser} id='IllustrationsUser' />
        </TabList>
      </Tabs>
    </div>
  );
};
export default NewUserTabBar;
