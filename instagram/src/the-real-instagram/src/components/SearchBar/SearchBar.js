import React from "react";
import "./searchBar.css";
import Logo from "../../iglogo.png";
import LogoText from "../../1200px-Instagram_logo.svg.png";

const SearchBar = props => {
  return (
    <div className="SearchBarWrapper">
      <div className="SearchBarContent">
        <div className="ImageWrapper">
          <img className="LogoImage" src={Logo} />
          <img className="LogoText" src={LogoText} />
        </div>

        <div>
          <input
            className="Input"
            type="text"
            placeholder="Search"
            onKeyDown={props.searchPosts}
          />
        </div>
        <div className="SocialWapper">
          <div className="social">
            <i className="far fa-compass" />
          </div>
          <div className="social">
            <i className="far fa-heart" />
          </div>
          <div className="social">
            <i className="far fa-user-circle" />
          </div>
          <div className="LogOut">
            <button
              value="Refresh Page"
              onClick={localStorage.removeItem("user")}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
