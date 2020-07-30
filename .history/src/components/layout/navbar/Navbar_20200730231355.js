import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="nav-extended">
          <div class="nav-wrapper">
            <h6 class="brand-logo left">Logo</h6>

            <ul id="nav-mobile" class="right">
              <li>
                <a href="sass.html">Sass</a>
              </li>
              <li>
                <a href="badges.html">Components</a>
              </li>
            </ul>
          </div>
          <div class="nav-content">
            <ul class="tabs tabs-transparent">
              <li class="tab">
                <Link>
                  <h6>Test 1</h6>
                </Link>
              </li>
              <li class="tab">
                <Link>
                  <h6>Test 1</h6>
                </Link>
              </li>
              <li class="tab">
                <Link>
                  <h6>Test 1</h6>
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
