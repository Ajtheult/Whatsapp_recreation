import React, { Component } from "react";
import PhoneCallNav from "../../navbar/PhoneCallNav";

export class VoiceCall extends Component {
  render() {
    return (
      <div>
        <PhoneCallNav />

        <footer className="page-footer teal voicecall_footer">
          <div className="row move_call_icons_up">
            <div className="col s4">
              <i className="fas fa-volume-up"></i>
            </div>
            <div className="col s4">
              {" "}
              <i className="fas fa-video"></i>
            </div>
            <div className="col s4">
              <i className="fas fa-microphone-slash"></i>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default VoiceCall;
