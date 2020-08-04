/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import "../../../App.css";
const CallMenu = () => {
  const [contacts] = useState([
    {
      img:
        "https://scontent.fcpt7-1.fna.fbcdn.net/v/t1.0-9/116686514_942788292865442_1099744020463292871_n.jpg?_nc_cat=100&_nc_sid=8bfeb9&_nc_ohc=7YrcIBYlA4oAX_8YBwD&_nc_ht=scontent.fcpt7-1.fna&oh=6064303e42f695ce8e5785a71af9fa3d&oe=5F4CBD3B",
      name: "Kim💜🍃",
      time: "↗ 19 July, 20:13",
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
              <p className="contact_menu_messages">{contact.time}</p>
            </div>
            <div className="col s2 icons_call_menu">
              <Link to="/video-call">
                <i className="fas fa-video"></i>
              </Link>
            </div>
            <div className="divider decrease_height" />
          </div>
        ))}
        <div className="col s3">
          <img
            className="profile_pictures"
            src="https://scontent.fcpt7-1.fna.fbcdn.net/v/t1.0-9/84851398_1004395919936138_3556978415741435904_n.jpg?_nc_cat=101&_nc_sid=174925&_nc_ohc=oe1NUrE_xqMAX8STOR5&_nc_ht=scontent.fcpt7-1.fna&oh=09c07019b58162d5c4bcf2329cc23549&oe=5F4C4401"
            alt="img"
          />
        </div>
        <div className="col s7 chat_menu_text">
          <h6 className="contact_name_cm">Nala🍵🐸</h6>
          <p className="contact_menu_messages">↙ 5 July, 12:42</p>
        </div>
        <div className="col s2 icons_call_menu">
          <Link to="/voice-call">
            <i className="material-icons">call</i>
          </Link>
        </div>
      </div>
      <div className="divider decrease_height" />

      {/* Bottom of page */}

      <h6 className="move_message_icon_in_chat_menu">
        <Link to="#contacts">
          <button className="btn-floating btn-large green right move_contact_icon_abit_up_call">
            <i className="material-icons">add_ic_call</i>
          </button>
        </Link>
      </h6>
    </div>
  );
};

export default CallMenu;
