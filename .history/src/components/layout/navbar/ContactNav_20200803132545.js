import React, { Component } from "react";
import { Link } from "react-router-dom";
export class ContactNav extends Component {
  render() {
    return (
      <div>
        <div className="row nav teal color_of_contactnav">
          <div className="col s2">
            <Link to="/chat">
              <i className="fas fa-arrow-left move_arrow " />
            </Link>
          </div>
          <div className="col s7 ">
            <h6 className="contact_number">
              Select contact{" "}
              <p className="contact_number_bottom">24 contacts</p>
            </h6>
          </div>
          <div className="col s3 move_icons">
            <i className="fas fa-search"></i>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <i className="fas fa-ellipsis-v" />
            &nbsp; &nbsp; &nbsp;
          </div>
        </div>
      </div>
    );
  }
}

export default ContactNav;
