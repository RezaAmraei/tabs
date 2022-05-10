import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Tab from "./components/Tab";
import TabContent from "./components/TabContent";

function App() {
  const [tabs, setTabs] = useState([
    { label: "Tab 1", content: "Tab 1 content showing here." },
    { label: "Tab 2", content: "Tab 2 content showing here." },
    { label: "Tab 3", content: "Tab 3 content showing here." },
  ]);
  const [currentTab, setCurrentTab] = useState({ label: "", content: "" });
  //console.log(currentTab);
  return (
    <div className="App">
      <Tab tabs={tabs} setCurrentTab={setCurrentTab} />
      <TabContent currentTab={currentTab} />
    </div>
  );
}

export default App;
