import { Tabs, TabList, TabPanel, Tab } from 'react-re-super-tabs';
import Tabbar from '../../Components/Tabbar';
import Banner from './Banner';
import Spotlights from './Spotlights';
// import Textads from './TextAds'
import Text from './Text';

const AdvTabs = () => {
  return (
    <>
     <div>
    <Tabs activeTab='Banner'>
      <TabList>
        <Tab component={Tabbar} label='Banner' id='Banner' />
        <Tab component={Tabbar} label='Spotlights' id='Spotlights' />
        <Tab component={Tabbar} label='Text Ads' id='TextAds' />
      </TabList>
      <TabList>
        <TabPanel component={Banner} id='Banner' />
        <TabPanel component={Spotlights} id='Spotlights' />
        <TabPanel component={Text} id='TextAds' />
      </TabList>
    </Tabs>
  </div>
    </>
  )
}

export default AdvTabs