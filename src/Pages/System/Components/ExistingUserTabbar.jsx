import React from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-re-super-tabs";
import tabs from "../Components/tabs.jsx";
import ExistingUser from "../UpdatePages/EditUserDetails.jsx";
import IllustrationsUser from "../pages/CreateIllustrationsUser.jsx";
export const ExistingUserTabbar = () => {
  return (
    <div>
      <Tabs activeTab="Users">
        <TabList>
          <Tab component={tabs} label="Users" id="Users" />
          <Tab component={tabs} label="Illustrations" id="IllustrationsUser" />
        </TabList>
        <TabList>
          <TabPanel component={ExistingUser} id="Users" />
          <TabPanel component={IllustrationsUser} id="IllustrationsUser" />
        </TabList>
      </Tabs>
    </div>
  );
};
export default ExistingUserTabbar;
