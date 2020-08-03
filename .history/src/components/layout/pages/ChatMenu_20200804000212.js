import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import "../../../App.css";
const ChatMenu = () => {
  const [contacts] = useState([
    {
      img:
        "https://scontent.fcpt7-1.fna.fbcdn.net/v/t1.0-9/106269353_921949158282689_2965407331543375300_n.jpg?_nc_cat=101&_nc_sid=730e14&_nc_ohc=LtsdmLQqirkAX8xdEQS&_nc_ht=scontent.fcpt7-1.fna&oh=8d6c4155d2143c2f96fc2819c02f45ea&oe=5F4C0589",
      name: "Asaph🎹",
      message: "So yeah thats why I've been offline for so...",
      time: "17:36",
    },
    {
      img:
        "https://scontent.fcpt7-1.fna.fbcdn.net/v/t1.0-9/116707589_942788272865444_6787909632624596434_n.jpg?_nc_cat=105&_nc_sid=8bfeb9&_nc_ohc=HgV5qHSEVm0AX8XvP1B&_nc_ht=scontent.fcpt7-1.fna&oh=73ad4663ca58cb26d83f1aa79b9813db&oe=5F4CB6B6",
      name: "😂Reegen AKA Heindrick😂",
      message: "✓ Joh vhet bruh🤣I need a break. These...",
      time: "17:21",
    },
    {
      img:
        "https://scontent.fcpt7-1.fna.fbcdn.net/v/t1.0-9/116686514_942788292865442_1099744020463292871_n.jpg?_nc_cat=100&_nc_sid=8bfeb9&_nc_ohc=7YrcIBYlA4oAX_8YBwD&_nc_ht=scontent.fcpt7-1.fna&oh=6064303e42f695ce8e5785a71af9fa3d&oe=5F4CBD3B",
      name: "Kim💜🍃",
      message: "✓ Music really is such a wonderful thing. It...",
      time: "15:39",
    },
    {
      img:
        "https://scontent.fcpt7-1.fna.fbcdn.net/v/t1.0-9/84851398_1004395919936138_3556978415741435904_n.jpg?_nc_cat=101&_nc_sid=174925&_nc_ohc=oe1NUrE_xqMAX8STOR5&_nc_ht=scontent.fcpt7-1.fna&oh=09c07019b58162d5c4bcf2329cc23549&oe=5F4C4401",
      name: "Nala🍵🐸",
      message: "lol it's our inside meme.",
      time: "14:53",
    },
    {
      img:
        "https://scontent.fcpt7-1.fna.fbcdn.net/v/t1.0-9/116721653_942788282865443_1702655637001663442_n.jpg?_nc_cat=105&_nc_sid=8bfeb9&_nc_ohc=8Vv0jOKlAsIAX_PSI0r&_nc_ht=scontent.fcpt7-1.fna&oh=0cef53b374c2ba60ec66516ae3fb1cf7&oe=5F4AD372",
      name: "Kayleen🤠",
      message: "I cant't wait until this whole thing blows over...",
      time: "14:26",
    },
    {
      img:
        "https://cdn.pixabay.com/photo/2017/08/27/22/29/abstract-2687792_960_720.png",
      name: "Trinity Worship Team🎶",
      message: "🎹Asaph🎹: So is that the...",
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
        <Link to="/contact">
          <button className="btn-floating btn-large waves-effect waves-light green right move_contact_icon_abit_up pulse">
            <i className="material-icons">mode_comment</i>
          </button>
        </Link>
      </h6>
    </div>
  );
};

export default ChatMenu;
