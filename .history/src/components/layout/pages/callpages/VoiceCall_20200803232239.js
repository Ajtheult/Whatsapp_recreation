import React, { Component } from "react";
import PhoneCallNav from "../../navbar/PhoneCallNav";

export class VoiceCall extends Component {
  render() {
    return (
      <div>
        <PhoneCallNav />

        <footer className="page-footer teal voicecall_footer">
          <div className="row">
            <div className="col s4">
              <i className="fas fa-volume-up move_call_icons_up"></i>
            </div>
            <div className="col s4">
              {" "}
              <i className="fas fa-video move_call_icons_up"></i>
            </div>
            <div className="col s4">
              <i className="fas fa-microphone-slash move_call_icons_up"></i>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default VoiceCall;
