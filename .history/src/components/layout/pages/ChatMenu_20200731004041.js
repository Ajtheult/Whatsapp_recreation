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
        <Link to="#contacts">
          <a
            href="#home"
            class="btn-floating btn-large waves-effect waves-light teal right"
          >
            Archived (13)
            <i class="material-icons">mode_comment</i>
          </a>
        </Link>
      </p>
    </div>
  );
};

export default ChatMenu;
