import React from "react";

const Tab = (props) => {
  const onClickHandler = (tab) => {
    //console.log(tab);
    props.setCurrentTab(tab);
  };
  return (
    <div>
      {props.tabs.map((tab, i) => (
        <button onClick={(e) => onClickHandler(tab)} key={i}>
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tab;
