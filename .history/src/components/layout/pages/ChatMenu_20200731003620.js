import React from "react";
import Navbar from "../navbar/Navbar";
import "../../../App.css";
const ChatMenu = () => {
  return (
    <div>
      <Navbar />

      {/* Bottom of page */}
      <h5>Archived (13)</h5>
      <p>
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
