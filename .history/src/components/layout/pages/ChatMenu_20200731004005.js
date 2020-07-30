import React from "react";
import Navbar from "../navbar/Navbar";
import Link from "react-router-dom";
import "../../../App.css";
const ChatMenu = () => {
  return (
    <div>
      <Navbar />

      {/* Bottom of page */}

      <p className="move_message_icon_in_chat_menu">
        Archived (13)
        <Link to="#contacts">
          <a
            href="#home"
            class="btn-floating btn-large waves-effect waves-light teal right"
          >
            <i class="material-icons">mode_comment</i>
          </a>
        </Link>
      </p>
    </div>
  );
};

export default ChatMenu;
