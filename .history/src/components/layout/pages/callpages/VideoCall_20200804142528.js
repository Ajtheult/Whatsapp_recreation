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
            src="https://images.unsplash.com/photo-1452721226468-f95fb66ebf83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
            className="bg"
            alt="bg"
          />
        </div>
        <Link to="/calls">
          <button className="btn-floating btn-large waves-effect waves-light red darken-1 pulse video_call_hangup">
            <i className="material-icons">call_end</i>
          </button>
        </Link>

        <footer className=" voicecall_footer">
          <div className="row">
            <div className="col s4">
              <span class="material-icons  move_call_icons_up">
                flip_camera_ios
              </span>
            </div>
            <div className="col s4">
              {" "}
              <i class="fas fa-video-slash move_call_icons_up video_icon_call"></i>
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
