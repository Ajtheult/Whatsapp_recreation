import React, { Component } from "react";

export class PhoneCallNav extends Component {
  render() {
    return (
      <div>
        <nav>
          <div class="row teal">
            <div class="col s12 whatsapp_voice_call_title">
              <i class="fab fa-whatsapp" /> WHATSAPP VOICE CALL
            </div>
            <div class="col s12">
              <h4>Name</h4>
              <h5>Calling</h5>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default PhoneCallNav;
