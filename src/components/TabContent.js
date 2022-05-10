import React from "react";

const TabContent = (props) => {
  return (
    <div>
      <h2>{props.currentTab.content}</h2>
    </div>
  );
};

export default TabContent;
