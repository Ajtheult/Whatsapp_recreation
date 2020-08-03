import React, { Component } from "react";

export class PhoneCallNav extends Component {
  render() {
    return (
      <div>
        <nav>
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
        </nav>
      </div>
    );
  }
}

export default PhoneCallNav;
