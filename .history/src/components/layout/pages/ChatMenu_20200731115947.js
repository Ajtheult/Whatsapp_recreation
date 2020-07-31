import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import "../../../App.css";
const ChatMenu = () => {
  const [contacts] = useState([
    {
      img:
        "https://cdn.pixabay.com/photo/2016/04/25/18/07/halcyon-1352522_1280.jpg",
      name: "Asaph Franks 🎹",
      message: "✓ So yeah thats why I've...",
      time: "17:36",
    },
    {
      img:
        "https://cdn.pixabay.com/photo/2016/04/25/18/07/halcyon-1352522_1280.jpg",
      name: "😂Reegen AKA Heindrick😂",
      message: "✓ Joh vhet bruh. I need ...",
      time: "17:36",
    },
  ]);
  return (
    <div>
      <Navbar />

      {/* Chats-Try to implement state */}
      <div className="row">
        {contacts.map((contact, idx) => (
          <div key={idx}>
            <div className="col s3">
              <img
                className="profile_pictures"
                src={contact.img}
                alt={contact.name}
              />
            </div>
            <div className="col s7 chat_menu_text">
              <h6 className="contact_name_cm">{contact.name}</h6>
              <p className="contact_menu_messages">{contact.message}</p>
            </div>
            <div className="col s2 cm_time">{contact.time}</div>
            <div className="divider decrease_height" />
          </div>
        ))}
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
