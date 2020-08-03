import React, { Component } from "react";
import { Link } from "react-router-dom";
export class ContactNav extends Component {
  render() {
    return (
      <div>
        <nav className="teal">
          <div className="row">
            <div className="col s2">
              <br />
              <Link to="/chat">
                <i className="fas fa-arrow-left " />
              </Link>
            </div>
            <div className="col s7 ">
              <h6 className="contact_number">
                hey <br />
                20 contacts
              </h6>
            </div>
            <div className="col s3">6-columns (one-half)</div>
          </div>
        </nav>
      </div>
    );
  }
}

export default ContactNav;
