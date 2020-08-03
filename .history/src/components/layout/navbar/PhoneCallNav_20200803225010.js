import React, { Component } from "react";

export class PhoneCallNav extends Component {
  render() {
    return (
      <div>
        <nav>
          <div class="row teal">
            <div class="col s12 whatsapp_voice_call_title">
              <i class="fab fa-whatsapp" />{" "}
              <span className="">WHATSAPP VOICE CALL</span>
            </div>
            <div class="col s12">6-columns (one-half)</div>
          </div>
        </nav>
      </div>
    );
  }
}

export default PhoneCallNav;
