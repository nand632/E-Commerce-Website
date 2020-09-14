import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
function Header() {
  return (
    <div className="header">
      <img className="header_logo" src={require("./logo.png")} />
      <div className="header_search">
        <input 
        className="header_searchInput" 
        type="text" />
        <SearchIcon
        className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="headrer_optionLineOne">Hello Guest</span>
          <span className="headrer_optionLineTwo">Sign In</span>
        </div>

        <div className="header_option">
          <span className="headrer_optionLineOne">Returns</span>
          <span className="headrer_optionLineTwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="headrer_optionLineOne">Your</span>
          <span className="headrer_optionLineTwo">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
