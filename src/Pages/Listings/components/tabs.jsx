import { Tabs, TabList, TabPanel, Tab } from 'react-re-super-tabs';
import listingTab from './listingTab.jsx';
import Active from '../page/ActiveListings.jsx';
import Inactive from '../page/Inactivelistings.jsx';

const AdvTabs = () => {
  return (
    <>
      <div>
        <Tabs activeTab='Active'>
          <TabList>
            <Tab component={listingTab} label='Active Listings' id='Active' />
            <Tab component={listingTab} label='Inactive Listings' id='Inactive' />
          </TabList>
          <TabList>
            <TabPanel component={Active} id='Active' />
            <TabPanel component={Inactive} id='Inactive' />
          </TabList>
        </Tabs>
      </div>
    </>
  );
};

export default AdvTabs;
