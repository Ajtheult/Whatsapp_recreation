import React, { Component } from "react";
import PhoneCallNav from "../../navbar/PhoneCallNav";

export class VoiceCall extends Component {
  render() {
    return (
      <div>
        <PhoneCallNav />

        <div className="bg-color">
          <img
            src="https://scontent.fcpt7-1.fna.fbcdn.net/v/t1.0-9/116914428_942788286198776_8862159367019768073_n.jpg?_nc_cat=104&_nc_sid=8bfeb9&_nc_ohc=xCaClC3c-s4AX-cYpKL&_nc_ht=scontent.fcpt7-1.fna&oh=d9c9f24a21faefe58886e688cf40ba21&oe=5F4AF1A6"
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
