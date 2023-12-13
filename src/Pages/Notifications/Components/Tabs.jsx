import { Tabs, TabList, TabPanel, Tab } from 'react-re-super-tabs';
import Tabbar from './tabbar.jsx';
import NewMessage from '../page/NewMessage.jsx'
import MessageSent from '../page/MessageSent.jsx'
import Archived from '../page/Archived.jsx'

const AdvTabs = () => {
  return (
    <>
     <div>
    <Tabs activeTab='NewMessage'>
      <TabList>
        <Tab component={Tabbar} label='New Message' id='NewMessage' />
        <Tab component={Tabbar} label='Message Sent' id='MessageSent' />
        <Tab component={Tabbar} label='Archived Message' id='Archived' />
      </TabList>
      <TabList>
        <TabPanel component={NewMessage} id='NewMessage' />
        <TabPanel component={MessageSent} id='MessageSent' />
        <TabPanel component={Archived} id='Archived' />
      </TabList>
    </Tabs>
  </div>
    </>
  )
}

export default AdvTabs