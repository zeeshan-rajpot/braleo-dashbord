import React from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-re-super-tabs";
import tabs from "../Components/Tabs.jsx";
import Active from "../pages/activePlans.jsx";
import Update from "../Update Planes/UpdatePlans.jsx";
import User from "../pages/userCredits.jsx";

export const tabBar = () => {
  return (
    <div>
      <Tabs activeTab="Active">
        <TabList>
          <Tab component={tabs} label="Active Plans" id="Active" />
          <Tab component={tabs} label="Update Plan" id="Update" />
          <Tab component={tabs} label="User Credits" id="User" />
        </TabList>
        <TabList>
          <TabPanel component={Active} id="Active" />
          <TabPanel component={Update} id="Update" />
          <TabPanel component={User} id="User" />
        </TabList>
      </Tabs>
    </div>
  );
};
export default tabBar;
