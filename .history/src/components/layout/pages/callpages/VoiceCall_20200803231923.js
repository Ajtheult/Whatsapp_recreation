import React, { Component } from "react";
import PhoneCallNav from "../../navbar/PhoneCallNav";

export class VoiceCall extends Component {
  render() {
    return (
      <div>
        <PhoneCallNav />

        <footer class="page-footer teal voicecall_footer">
          <div class="row">
            <div class="col s4">
              <i class="fas fa-volume-up"></i>
            </div>
            <div class="col s4">
              {" "}
              <i class="fas fa-video"></i>
            </div>
            <div class="col s4">
              <i class="fas fa-microphone-slash"></i>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default VoiceCall;
