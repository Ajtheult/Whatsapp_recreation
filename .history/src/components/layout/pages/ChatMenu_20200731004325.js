import React from "react";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import "../../../App.css";
const ChatMenu = () => {
  return (
    <div>
      <Navbar />

      {/* Bottom of page */}

      <p className="move_message_icon_in_chat_menu">
        <h6>Archived (13)</h6>
        <Link to="#contacts">
          <a
            href="#home"
            class="btn-floating btn-large waves-effect waves-light teal right move_contact_icon_abit_up"
          >
            <i class="material-icons">mode_comment</i>
          </a>
        </Link>
      </p>
    </div>
  );
};

export default ChatMenu;
