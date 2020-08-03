import React, { Component } from "react";
import { Link } from "react-router-dom";
export class ContactNav extends Component {
  render() {
    return (
      <div>
        <nav className="teal">
          <div class="row">
            <div class="col s2 ">
              <Link to="/chat" className=" move_arrow">
                <i class="fas fa-arrow-left" />
              </Link>
            </div>
            <div class="col s7 ">
              <h6 className="contact_number">
                hey <br />
                20 contacts
              </h6>
            </div>
            <div class="col s3">6-columns (one-half)</div>
          </div>
        </nav>
      </div>
    );
  }
}

export default ContactNav;
