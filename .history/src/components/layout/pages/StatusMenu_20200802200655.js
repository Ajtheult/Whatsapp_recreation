/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import "../../../App.css";
const ChatMenu = () => {
  const [contacts] = useState([
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
      time: "54 minutes ago",
    },
    {
      img:
        "https://cdn.pixabay.com/photo/2017/01/27/16/09/people-2013447_960_720.jpg",
      name: "Nala🍵🐸",
      time: "Today, 11:53",
    },
    {
      img:
        "https://cdn.pixabay.com/photo/2018/04/26/07/03/pretty-3351294_1280.png",
      name: "Kayleen🤠",
      time: "Yesterday, 08:13",
    },
  ]);
  return (
    <div>
      <Navbar />
      <div className="row">
        <div className="col s3">
          <img
            className="my_profile_picture_status"
            src="https://scontent.fcpt7-1.fna.fbcdn.net/v/t1.0-9/116815126_941703772973894_1282831551764897661_n.jpg?_nc_cat=104&_nc_sid=730e14&_nc_ohc=PdanjokX3WAAX-aZ7Mh&_nc_ht=scontent.fcpt7-1.fna&oh=e4110a85dcb85dc01d33ea69ccd0943f&oe=5F4D48A8"
            alt="img"
          />
        </div>
        <div className="col s9 chat_menu_text">
          <h6 className="contact_name_cm">Asaph🎹</h6>
          <p className="contact_menu_messages">7 minutes ago</p>
        </div>
        <div className="divider increase_height_status">
          <h6 className="move_recent_updates">Recent updates</h6>
        </div>
        {/* Chats-Try to implement state */}

        {contacts.map((contact, idx) => (
          <div key={idx}>
            <div className="col s3">
              <img
                className="profile_picture_status"
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
