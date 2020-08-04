import React, { Component } from "react";
import VideoCallNav from "../../navbar/VideoCallNav";
import { Link } from "react-router-dom";

export class VideoCall extends Component {
  render() {
    return (
      <div>
        <VideoCallNav />

        <div className="bg-color">
          <img
            src="https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
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

export default VideoCall;
