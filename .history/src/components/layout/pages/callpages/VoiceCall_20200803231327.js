import React, { Component } from "react";
import PhoneCallNav from "../../navbar/PhoneCallNav";

export class VoiceCall extends Component {
  render() {
    return (
      <div>
        <PhoneCallNav />

        <footer class="page-footer voicecall_footer">
          <div class="row">
            <div class="col s4">
              This div is 12-columns wide on all screen sizes
            </div>
            <div class="col s4">6-columns (one-half)</div>
            <div class="col s4">6-columns (one-half)</div>
          </div>
        </footer>
      </div>
    );
  }
}

export default VoiceCall;
