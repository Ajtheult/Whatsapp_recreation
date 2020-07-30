import React from "react";
import Navbar from "../navbar/Navbar";
import "../../../App.css";
const ChatMenu = () => {
  return (
    <div>
      <Navbar />
      <a
        href="#home"
        class="btn-floating btn-large waves-effect waves-light red"
      >
        <i class="material-icons">add</i>
      </a>
    </div>
  );
};

export default ChatMenu;
