import React, { Component } from "react";
import { Link } from "react-router-dom";
export class ContactNav extends Component {
  render() {
    return (
      <div>
        <nav className="teal">
          <div class="row">
            <div class="col s1">
              <Link to="/chat">
                <i class="fas fa-arrow-left" />
              </Link>
            </div>
            <div class="col s8">
              <h6>hey</h6>
              <p className="contact_number">20 contacts</p>
            </div>
            <div class="col s3">6-columns (one-half)</div>
          </div>
        </nav>
      </div>
    );
  }
}

export default ContactNav;
