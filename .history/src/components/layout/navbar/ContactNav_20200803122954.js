import React, { Component } from "react";

export class ContactNav extends Component {
  render() {
    return (
      <div>
        <nav>
          <div class="row">
            <div class="nav-wrapper">
              <div class="col s6">6-columns (one-half)</div>
              <div class="col s6">6-columns (one-half)</div>

              <ul id="nav-mobile">
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
          </div>
        </nav>
      </div>
    );
  }
}

export default ContactNav;
