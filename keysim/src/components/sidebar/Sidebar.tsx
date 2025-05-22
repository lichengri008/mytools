import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import TestingPane from "./TestingPane";
import OptionsPane from "./OptionsPane";
import styles from "./Sidebar.module.scss";
import ColorwayEditor from "../colorway/ColorwayEditor";
import Logo from "../../assets/logo.svg?react";
import Name from "../../assets/logo_text.svg?react";

import "./tabs.scss";

export default function Sidebar() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div id="sidebar" className={styles.sidebar}>
      <div className={styles.intro}>
        <div className={styles.logoWrapper}>
          <h1 aria-label="Keyboard Simulator">
            <Logo />
            <Name />
          </h1>
        </div>
      </div>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab tabIndex="0">Options</Tab>
          <Tab tabIndex="0">Editor</Tab>
          {/* <Tab tabIndex="0">Test</Tab> */}
        </TabList>
        <TabPanel>
          <OptionsPane setTab={setTabIndex} />
        </TabPanel>
        <TabPanel>
          <ColorwayEditor />
        </TabPanel>
        {/* Note: 弃用!!! 使用的第三方库wpmtest 不兼容 vite !!! */}
        {/* <TabPanel><TestingPane /></TabPanel> */}
      </Tabs>
    </div>
  );
}
