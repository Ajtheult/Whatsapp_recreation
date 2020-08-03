import React, { Component } from "react";
import PhoneCallNav from "../../navbar/PhoneCallNav";
import { Link } from "react-router-dom";

export class VoiceCall extends Component {
  render() {
    return (
      <div>
        <PhoneCallNav />

        <div className="bg-color">
          <img
            src="https://scontent.fcpt7-1.fna.fbcdn.net/v/t1.0-9/84851398_1004395919936138_3556978415741435904_n.jpg?_nc_cat=101&_nc_sid=174925&_nc_ohc=oe1NUrE_xqMAX8STOR5&_nc_ht=scontent.fcpt7-1.fna&oh=09c07019b58162d5c4bcf2329cc23549&oe=5F4C4401"
            className="bg"
            alt="bg"
          />
        </div>
        <Link to="/calls">
          <button className="btn-floating btn-large waves-effect waves-light red darken-1 pulse voice_call_hangup">
            <i className="material-icons">call_end</i>
          </button>
        </Link>

        <footer className="page-footer teal voicecall_footer">
          <div className="row">
            <div className="col s4">
              <i className="fas fa-volume-up move_call_icons_up"></i>
            </div>
            <div className="col s4">
              {" "}
              <i className="fas fa-video move_call_icons_up video_icon_call"></i>
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
