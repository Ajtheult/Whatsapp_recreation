import React, { Component } from "react";

export class ContactNav extends Component {
  render() {
    return (
      <div>
        <nav>
          <div class="row">
            <div class="nav-wrapper">
              <div class="col s1">
                <i class="fas fa-arrow-left"></i>
              </div>
              <div class="col s8">6-columns (one-half)</div>
              <div class="col s3">6-columns (one-half)</div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default ContactNav;
