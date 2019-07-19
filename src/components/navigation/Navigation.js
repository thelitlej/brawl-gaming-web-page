import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.scss";
import Login from "../login/Login";

const Navigation = ({ loggedIn, setLoggedIn }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="navigation">
      <div className="logo">
        <NavLink exact to="/">
          <div className="logo-wrapper">
            <img src="/images/logo.png" alt="logo" />
            <div className="text">
              <h4>Brawl Gaming</h4>
            </div>
          </div>
        </NavLink>
        <div className="mobile"> 
        <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        </div>
        <div className="is-mobile"><Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} /></div>
      </div>
      <div className="menu">
        <NavLink className="nav-text" exact to="/" onClick={() => scrollToTop()}>
          Home
        </NavLink>
        <NavLink className="nav-text" to="/download" onClick={() => scrollToTop()}>
          Download
        </NavLink>
        <NavLink className="nav-text" to="/concept" onClick={() => scrollToTop()}>
          Concept
        </NavLink>
        <NavLink className="nav-text" to="/games" onClick={() => scrollToTop()}>
          Games
        </NavLink>
        <NavLink className="nav-text" to="/faq" onClick={() => scrollToTop()}>
          FAQ
        </NavLink>
        <div className="not-mobile"><Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} /></div>
      </div>
    </div>
  );
};

export default Navigation;
