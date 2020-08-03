/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import "../../../App.css";
const CallMenu = () => {
  const [contacts] = useState([
    {
      img:
        "https://scontent.fcpt7-1.fna.fbcdn.net/v/t1.0-9/116707589_942788272865444_6787909632624596434_n.jpg?_nc_cat=105&_nc_sid=8bfeb9&_nc_ohc=HgV5qHSEVm0AX8XvP1B&_nc_ht=scontent.fcpt7-1.fna&oh=73ad4663ca58cb26d83f1aa79b9813db&oe=5F4CB6B6",
      name: "😂Reegen AKA Heindrick😂",
      time: "↙ (3) 1 August, 23:49",
    },
    {
      img:
        "https://scontent.fcpt7-1.fna.fbcdn.net/v/t1.0-9/116686514_942788292865442_1099744020463292871_n.jpg?_nc_cat=100&_nc_sid=8bfeb9&_nc_ohc=7YrcIBYlA4oAX_8YBwD&_nc_ht=scontent.fcpt7-1.fna&oh=6064303e42f695ce8e5785a71af9fa3d&oe=5F4CBD3B",
      name: "Kim💜🍃",
      time: "↗ 19 July, 20:13",
    },
    {
      img:
        "https://scontent.fcpt7-1.fna.fbcdn.net/v/t1.0-9/116707589_942788272865444_6787909632624596434_n.jpg?_nc_cat=105&_nc_sid=8bfeb9&_nc_ohc=HgV5qHSEVm0AX8XvP1B&_nc_ht=scontent.fcpt7-1.fna&oh=73ad4663ca58cb26d83f1aa79b9813db&oe=5F4CB6B6",
      name: "😂Reegen AKA Heindrick😂",
      time: "↗ 10 July, 20:14",
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
              <i class="fas fa-video"></i>
            </div>
            <div className="divider decrease_height" />
          </div>
        ))}
        <div className="col s3">
          <img
            className="profile_pictures"
            src="https://scontent.fcpt7-1.fna.fbcdn.net/v/t1.0-9/116914428_942788286198776_8862159367019768073_n.jpg?_nc_cat=104&_nc_sid=8bfeb9&_nc_ohc=xCaClC3c-s4AX-cYpKL&_nc_ht=scontent.fcpt7-1.fna&oh=d9c9f24a21faefe58886e688cf40ba21&oe=5F4AF1A6"
            alt="img"
          />
        </div>
        <div className="col s7 chat_menu_text">
          <h6 className="contact_name_cm">Nala🍵🐸</h6>
          <p className="contact_menu_messages">↙ 5 July, 12:42</p>
        </div>
        <div className="col s2 icons_call_menu">
          <Link to="#voicecallnatalie">
            <i class="material-icons tEAL">call</i>
          </Link>
        </div>
      </div>
      <div className="divider decrease_height" />

      {/* Bottom of page */}

      <h6 className="move_message_icon_in_chat_menu">
        <Link to="#contacts">
          <button className="btn-floating btn-large waves-effect waves-light green right move_contact_icon_abit_up_call pulse">
            <i class="material-icons">add_ic_call</i>
          </button>
        </Link>
      </h6>
    </div>
  );
};

export default CallMenu;
