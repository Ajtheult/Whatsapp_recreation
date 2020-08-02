import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import "../../../App.css";
const ChatMenu = () => {
  const [contacts] = useState([
    {
      img:
        "https://cdn.pixabay.com/photo/2015/05/29/22/46/music-789935_960_720.jpg",
      name: "Asaph🎹",
      time: "7 minutes ago",
    },
    {
      img:
        "https://cdn.pixabay.com/photo/2016/12/07/09/32/white-male-1889033_960_720.jpg",
      name: "😂Reegen AKA Heindrick😂",
      time: "20 minutes ago",
    },
    {
      img:
        "https://cdn.pixabay.com/photo/2016/11/09/23/16/music-1813100_960_720.png",
      name: "Kim💜🍃",
      time: "24 minutes ago",
    },
    {
      img:
        "https://cdn.pixabay.com/photo/2017/01/27/16/09/people-2013447_960_720.jpg",
      name: "Nala🍵🐸",
      time: "14:53",
    },
    {
      img:
        "https://cdn.pixabay.com/photo/2018/04/26/07/03/pretty-3351294_1280.png",
      name: "Kayleen🤠",
      time: "14:26",
    },
    {
      img:
        "https://cdn.pixabay.com/photo/2017/08/27/22/29/abstract-2687792_960_720.png",
      name: "Trinity Worship Team🎶",
      time: "11:30",
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
            <div className="col s9 chat_menu_text">
              <h6 className="contact_name_cm">{contact.name}</h6>
              <p className="contact_menu_messages">{contact.time}</p>
            </div>

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