import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import UserContext from "../../contexts/UserContext";
import "./Header.css";

class Header extends Component {
  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    return (
      <div className="links">
        <span>{this.context.user.name}</span>
        <nav>
          <Link onClick={this.handleLogoutClick} to="/login">
            Logout
          </Link>
        </nav>
      </div>
    );
  }

  renderAppDescription() {
    return (
      <p className="description">
        Practice learning a language with the spaced reptition revision
        technique.
      </p>
    );
  }

  render() {
    return (
      <header>
        <div className="wrapper">
          <h1>
            <Link to="/">Jifunze</Link>
          </h1>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderAppDescription()}
        </div>
      </header>
    );
  }
}

export default Header;
