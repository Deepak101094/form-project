import React from "react";

//?component import
import AppBar from "../components/appBar/index";

/**
 * it adds a top appBar on the components which are wrapped with this hoc
 * @param {Component} InputComponent - component which is wrapped
 */
const withLayout = (props) => {
   return (
      <>
         <AppBar />
         {props.children}
      </>
   );
};

export default withLayout;
