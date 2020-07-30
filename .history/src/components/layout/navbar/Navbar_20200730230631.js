import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="nav-extended">
          <div class="nav-wrapper">
            <a href="#home" class="brand-logo">
              Logo
            </a>

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
                <a href="#test1">Test 1</a>
              </li>
              <li class="tab">
                <a class="active" href="#test2">
                  Test 2
                </a>
              </li>
              <li class="tab disabled">
                <a href="#test3">Disabled Tab</a>
              </li>
              <li class="tab">
                <button>Test 4</button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
