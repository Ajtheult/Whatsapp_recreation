import React from "react";
import Navbar from "../navbar/Navbar";
import "../../../App.css";
const ChatMenu = () => {
  return (
    <div>
      <Navbar />
      <div className="right move_message_icon_in_chat_menu">
        <a
          href="#home"
          class="btn-floating btn-large waves-effect waves-light red"
        >
          <i class="material-icons">add</i>
        </a>
      </div>
    </div>
  );
};

export default ChatMenu;
