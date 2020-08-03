/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from "react";

export class PhoneCallNav extends Component {
  render() {
    return (
      <div>
        <nav>
          <div class="row teal">
            <div class="col s12 move_name_whatsapp">
              <i class="fas fa-chevron-down left btn_to_exit_voice_call"></i>
              <i class="fab fa-whatsapp" />{" "}
              <span className="whatsapp_voice_call_title">
                {" "}
                WHATSAPP VOICE CALL
              </span>
            </div>
            <div class="col s12 move_name_callnav">
              <h3>Nala🍵🐸</h3>
              <h5>Calling...</h5>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default PhoneCallNav;
