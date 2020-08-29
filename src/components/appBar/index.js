import React from "react";

//library import
import { useHistory } from "react-router-dom";

//?logo import
import Logo from "../../assets/images/Final_Logo-removebg-preview[6332].png";

//?css import
import "./style.scss";
//?material import
import LanguageIcon from "@material-ui/icons/Language";

/**
 * app bar component that is used inside withLayout hoc to show top bar on pages
 */

const AppBar = () => {
  const history = useHistory();
  return (
    <div className="app_bar">
      <div
        className="img_container container"
        onClick={() => {
          history.push("/");
        }}
      >
        <img src={Logo} alt="logo" loading="lazy" height="100%" width="100%" />
      </div>
      <LanguageIcon fontSize="small" /> English
    </div>
  );
};

export default AppBar;
