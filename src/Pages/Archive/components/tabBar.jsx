import React from 'react';
import { Tabs, TabList, TabPanel, Tab } from 'react-re-super-tabs';
import tabs from './Tabs.jsx';
import Ads from '../pages/Ads.jsx';
import Listings from '../pages/Listings.jsx';
import Spotlights from '../pages/Spotlights.jsx';
import News from '../pages/News.jsx';
import Users from '../pages/Users.jsx';
import Requests from '../pages/Requests.jsx';
import Chat from '../pages/Chat.jsx';
export const tabBar = () => {
  return (
    <div>
      <Tabs activeTab='Ads'>
        <TabList>
          <Tab component={tabs} label='Ads' id='Ads' />
          <Tab component={tabs} label='Listings' id='Listings' />
          <Tab component={tabs} label='Spotlights' id='Spotlights' />
          <Tab component={tabs} label='News' id='News' />
          <Tab component={tabs} label='Users' id='Users' />
          <Tab component={tabs} label='Requests' id='Requests' />
          <Tab component={tabs} label='Chat' id='Chat' />
        </TabList>
        <TabList>
          <TabPanel component={Ads} id='Ads' />
          <TabPanel component={Listings} id='Listings' />
          <TabPanel component={Spotlights} id='Spotlights' />
          <TabPanel component={News} id='News' />
          <TabPanel component={Users} id='Users' />
          <TabPanel component={Requests} id='Requests' />
          <TabPanel component={Chat} id='Chat' />
        </TabList>
      </Tabs>
    </div>
  );
};
export default tabBar;
