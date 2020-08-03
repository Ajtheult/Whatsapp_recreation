import React, { Component } from "react";
import { Link } from "react-router-dom";
export class ContactNav extends Component {
  render() {
    return (
      <div>
        <div className="row nav teal color_of_contactnav">
          <div className="col s2.5">
            <Link to="/chat">
              <i className="fas fa-arrow-left move_arrow " />
            </Link>
          </div>
          <div className="col s6.5 ">
            <h6 className="contact_number">
              Select contact{" "}
              <p className="contact_number_bottom">24 contacts</p>
            </h6>
          </div>
          <div className="col s3">6-columns (one-half)</div>
        </div>
      </div>
    );
  }
}

export default ContactNav;
