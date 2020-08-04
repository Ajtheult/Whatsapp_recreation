/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from "react";
import { Link } from "react-router-dom";
export class VideoCallNav extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="row ">
            <div className="col s12 move_name_whatsapp_videocall">
              <Link to="/calls">
                <i className="fas fa-chevron-down left btn_to_exit_voice_call"></i>
              </Link>
              <i className="fab fa-whatsapp" />{" "}
              <span className="whatsapp_voice_call_title">
                {" "}
                WHATSAPP VOICE CALL
              </span>
            </div>
            <img
              src="https://scontent.fcpt7-1.fna.fbcdn.net/v/t1.0-9/116686514_942788292865442_1099744020463292871_n.jpg?_nc_cat=100&_nc_sid=8bfeb9&_nc_ohc=7YrcIBYlA4oAX_8YBwD&_nc_ht=scontent.fcpt7-1.fna&oh=6064303e42f695ce8e5785a71af9fa3d&oe=5F4CBD3B"
              alt="img"
              className="profile_picture_videocall"
            />
            <div className="col s12 move_name_callnav">
              <h3>Kim💜🍃</h3>
              <h5>CALLING</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoCallNav;
