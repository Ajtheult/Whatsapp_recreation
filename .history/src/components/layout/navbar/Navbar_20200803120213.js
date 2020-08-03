import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

export class Navbar extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".dropdown-trigger");
      //eslint-disable-next-line
      var instances = M.Dropdown.init(elems, {});
    });
  }
  render() {
    return (
      <div>
        <nav className="nav-extended teal">
          <div className="nav-wrapper">
            <h6 className="brand-logo left move_logo_of_whatsapp">Whatsapp</h6>

            <ul id="nav-mobile" className="right move_top_nav_icons_down">
              <li>
                <i className="fas fa-search"></i>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              </li>
              <li>
                <i
                  className="fas fa-ellipsis-v dropdown-trigger "
                  data-target="dropdown1"
                />
                &nbsp; &nbsp; &nbsp; &nbsp;
              </li>
              <ul id="dropdown1" className="dropdown-content width_of_dropdown">
                <li className="disabled_btn">
                  <a href="#!" className="waves-effect waves-light">
                    New Group
                  </a>
                </li>
                <li className="disabled_btn">
                  <a href="#!" className="waves-effect waves-light">
                    New broadcast
                  </a>
                </li>
                <li className="disabled_btn">
                  <a href="#!" className="waves-effect waves-light">
                    WhatsApp Web
                  </a>
                </li>
                <li className="disabled_btn">
                  <a href="#!" className="waves-effect waves-light">
                    <h6>Starred messages</h6>
                  </a>
                </li>
                <li className="disabled_btn">
                  <a href="#!" className="waves-effect waves-light">
                    <h6>Settings</h6>
                  </a>
                </li>
              </ul>
            </ul>
          </div>
          <div className="nav-content">
            <ul className="tabs tabs-transparent">
              <li>
                <i className="fas fa-camera move_camera_icon" />
              </li>
              <li className="tab">
                <Link to="/chat">
                  <h6>Chat</h6>
                </Link>
              </li>
              <li className="tab">
                <Link to="/status">
                  <h6>Status • </h6>
                </Link>
              </li>
              <li className="tab">
                <Link to="/calls">
                  <h6>Calls</h6>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
