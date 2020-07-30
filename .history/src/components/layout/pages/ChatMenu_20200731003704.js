import React from "react";
import Navbar from "../navbar/Navbar";
import "../../../App.css";
const ChatMenu = () => {
  return (
    <div>
      <Navbar />

      {/* Bottom of page */}

      <p>
        <h5 className="move_message_icon_in_chat_menu">Archived (13)</h5>
        <a
          href="#home"
          class="btn-floating btn-large waves-effect waves-light teal right move_message_icon_in_chat_menu"
        >
          <i class="material-icons">mode_comment</i>
        </a>
      </p>
    </div>
  );
};

export default ChatMenu;
