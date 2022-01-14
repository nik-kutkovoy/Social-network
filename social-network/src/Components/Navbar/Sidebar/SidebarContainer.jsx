import Sidebar from "./Sidebar";
import React from "react";

const SidebarContainer = (props) => {
  let state = props.store.getState();

  return <Sidebar sidebar={state.sidebar} />;
};

export default SidebarContainer;
