import React from "react";
import Navbar from "../navbar/Navbar";
import "../../../App.css";
const ChatMenu = () => {
  return (
    <div>
      <Navbar />

      {/* Bottom of page */}
      <div class="row">
        <div class="col s12 m4 l2 ">
          <p>
            {" "}
            <a
              href="#home"
              class="btn-floating btn-large waves-effect waves-light tealright move_message_icon_in_chat_menu"
            >
              <i class="material-icons">add</i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatMenu;
