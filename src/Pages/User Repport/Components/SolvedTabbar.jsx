import React, { useState } from 'react';
import { Tabs, TabList, TabPanel, Tab } from 'react-re-super-tabs';
import Solvedtabs from './SolvedTabs';
import Reclains from '../pages/tabReclains.jsx';
import Rates from '../pages/tabRates.jsx';
import Solved from '../pages/tabSolved.jsx';

export const SolvedTabbar = () => {
  const [activeTab, setActiveTab] = useState('Reclains');

  const handleTabChange = tab => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Tabs activeTab={activeTab} onTabChange={handleTabChange}>
        <TabList>
          <Tab
            component={() => (
              <Solvedtabs
                isActive={activeTab === 'Reclains'}
                imageSrc='./sadsmilie.svg'
                onClick={() => handleTabChange('Reclains')}
              >
                Reclains
              </Solvedtabs>
            )}
            label='Reclains'
            id='Reclains'
          />
          <Tab
            component={() => (
              <Solvedtabs
                isActive={activeTab === 'Rates'}
                imageSrc='./happysmilie.svg'
                onClick={() => handleTabChange('Rates')}
              >
                Rates
              </Solvedtabs>
            )}
            label='Rates'
            id='Rates'
          />
          <Tab
            component={() => (
              <Solvedtabs
                isActive={activeTab === 'Solved'}
                imageSrc='./excitedsmilie.svg'
                onClick={() => handleTabChange('Solved')}
              >
                Solved
              </Solvedtabs>
            )}
            label='Solved'
            id='Solved'
          />
        </TabList>
        <TabList>
          <TabPanel component={Reclains} id='Reclains' />
          <TabPanel component={Rates} id='Rates' />
          <TabPanel component={Solved} id='Solved' />
        </TabList>
      </Tabs>
    </div>
  );
};

export default SolvedTabbar;
