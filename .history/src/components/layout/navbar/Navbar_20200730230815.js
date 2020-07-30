import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="nav-extended">
          <div class="nav-wrapper">
            <h4 class="brand-logo">Logo</h4>

            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li>
                <a href="sass.html">Sass</a>
              </li>
              <li>
                <a href="badges.html">Components</a>
              </li>
              <li>
                <a href="collapsible.html">JavaScript</a>
              </li>
            </ul>
          </div>
          <div class="nav-content">
            <ul class="tabs tabs-transparent">
              <li class="tab">
                <h6>Test 1</h6>
              </li>
              <li class="tab">
                <h6>Test 2</h6>
              </li>
              <li class="tab">
                <h6>Test 4</h6>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
