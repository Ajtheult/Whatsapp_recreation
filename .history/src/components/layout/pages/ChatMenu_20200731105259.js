import React from "react";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import "../../../App.css";
const ChatMenu = () => {
  return (
    <div>
      <Navbar />

      {/* Chats-Try to implement state */}
      <div class="row">
        <div class="col s3">
          <img
            src="https://cdn.pixabay.com/photo/2016/04/25/18/07/halcyon-1352522_1280.jpg"
            className="profile_pictures"
            alt=""
            srcset=""
          />
        </div>

        <div class="col s6">4</div>

        <div class="col s3">10</div>
      </div>
      <div className="divider"></div>
      <div class="row">
        <div class="col s3">
          <img
            src="https://cdn.pixabay.com/photo/2016/04/25/18/07/halcyon-1352522_1280.jpg"
            className="profile_pictures"
            alt=""
            srcset=""
          />
        </div>

        <div class="col s6">4</div>

        <div class="col s3">10</div>
      </div>

      {/* Bottom of page */}

      <h6 className="move_message_icon_in_chat_menu">
        <p className="make_archive_bold">Archived (13)</p>
        <Link to="#contacts">
          <button className="btn-floating btn-large waves-effect waves-light teal right move_contact_icon_abit_up">
            <i className="material-icons">mode_comment</i>
          </button>
        </Link>
      </h6>
    </div>
  );
};

export default ChatMenu;
