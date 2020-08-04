/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from "react";
import { Link } from "react-router-dom";
export class PhoneCallNav extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="row teal">
            <div className="col s12 move_name_whatsapp">
              <Link to="/calls">
                <i className="fas fa-chevron-down left btn_to_exit_voice_call"></i>
              </Link>
              <i className="fab fa-whatsapp" />{" "}
              <span className="whatsapp_voice_call_title">
                {" "}
                WHATSAPP VOICE CALL
              </span>
            </div>
            <div className="col s12 move_name_callnav">
              <h3>Nala🍵🐸</h3>
              <h5>CALLING</h5>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default PhoneCallNav;
