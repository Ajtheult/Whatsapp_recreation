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

            <ul id="nav-mobile" class="right">
              <li>
                <i class="fas fa-search"></i>
              </li>

              <a
                class="dropdown-trigger btn"
                href="#home"
                data-target="dropdown1"
              >
                Drop Me!
              </a>

              <ul id="dropdown1" class="dropdown-content">
                <li>
                  <a href="#!">one</a>
                </li>
                <li>
                  <a href="#!">two</a>
                </li>
                <li class="divider" tabindex="-1"></li>
                <li>
                  <a href="#!">three</a>
                </li>
                <li>
                  <a href="#!">
                    <i class="material-icons">view_module</i>four
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i class="material-icons">cloud</i>five
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
                <Link to="#chats">
                  <h6>Chat</h6>
                </Link>
              </li>
              <li class="tab">
                <Link to="#status">
                  <h6>Status</h6>
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
