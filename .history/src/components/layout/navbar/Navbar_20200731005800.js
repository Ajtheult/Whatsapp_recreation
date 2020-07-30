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
        <nav class="nav-extended teal">
          <div class="nav-wrapper">
            <h6 class="brand-logo left move_logo_of_whatsapp">Whatsapp</h6>

            <ul id="nav-mobile" class="right move_top_nav_icons_down">
              <li>
                <i class="fas fa-search"></i>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              </li>
              <li>
                <i
                  class="fas fa-ellipsis-v dropdown-trigger "
                  data-target="dropdown1"
                />
                &nbsp; &nbsp; &nbsp; &nbsp;
              </li>
              <ul id="dropdown1" class="dropdown-content width_of_dropdown">
                <li className="disabled">
                  <a href="#!" className="waves-effect waves-light">
                    New Group
                  </a>
                </li>
                <li className="disabled">
                  <a href="#!" className="waves-effect waves-light">
                    New broadcast
                  </a>
                </li>
                <li className="disabled">
                  <a href="#!" className="waves-effect waves-light">
                    WhatsApp Web
                  </a>
                </li>
                <li className="disabled">
                  <a href="#!" className="waves-effect waves-light">
                    <h6>Starred messages</h6>
                  </a>
                </li>
                <li className="disabled">
                  <a href="#!" className="waves-effect waves-light">
                    <h6>Settings</h6>
                  </a>
                </li>
              </ul>
            </ul>
          </div>
          <div class="nav-content">
            <ul class="tabs tabs-transparent">
              <li>
                <i class="fas fa-camera move_camera_icon" />
              </li>
              <li class="tab">
                <Link to="#chat ">
                  <h6>Chat ①</h6>
                </Link>
              </li>
              <li class="tab">
                <Link to="#status">
                  <h6>Status • </h6>
                </Link>
              </li>
              <li class="tab">
                <Link to="#calls">
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
