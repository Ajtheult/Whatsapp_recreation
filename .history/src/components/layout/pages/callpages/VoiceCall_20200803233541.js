import React, { Component } from "react";
import PhoneCallNav from "../../navbar/PhoneCallNav";

export class VoiceCall extends Component {
  render() {
    return (
      <div>
        <PhoneCallNav />

        <div className="bg-color">
          <img
            src="https://images.unsplash.com/photo-1523365237953-9f36b3c8cada?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            className="bg"
            alt="bg"
          />
        </div>

        <button class="btn-floating btn-large waves-effect waves-light red darken-1 pulse voice_call_hangup">
          <i class="material-icons">call_end</i>
        </button>

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
