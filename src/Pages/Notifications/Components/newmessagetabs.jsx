import { Tabs, TabList, TabPanel, Tab } from 'react-re-super-tabs';
import Tabbar from './newmessagetabbar.jsx';
import NewMessage from '../page/CreateMessage.jsx'
import Advices from '../page/Advices.jsx'
const AdvTabs = () => {
  return (
    <>
     <div>
    <Tabs activeTab='NewMessage'>
      <TabList>
        <Tab component={Tabbar} label='New Message' id='NewMessage' />
        <Tab component={Tabbar} label='Advices' id='Advices' />
      </TabList>
      <TabList>
        <TabPanel component={NewMessage} id='NewMessage' />
        <TabPanel component={Advices} id='Advices' />
      </TabList>
    </Tabs>
  </div>
    </>
  )
}

export default AdvTabs