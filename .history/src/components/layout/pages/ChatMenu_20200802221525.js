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
      message: "So yeah thats why I've been...",
      time: "17:36",
    },
    {
      img:
        "https://scontent.fcpt7-1.fna.fbcdn.net/v/t1.0-9/116707589_942788272865444_6787909632624596434_n.jpg?_nc_cat=105&_nc_sid=8bfeb9&_nc_ohc=HgV5qHSEVm0AX8XvP1B&_nc_ht=scontent.fcpt7-1.fna&oh=73ad4663ca58cb26d83f1aa79b9813db&oe=5F4CB6B6",
      name: "😂Reegen AKA Heindrick😂",
      message: "✓ Joh vhet bruh🤣I need a...",
      time: "17:21",
    },
    {
      img:
        "https://scontent.fcpt7-1.fna.fbcdn.net/v/t1.0-9/116686514_942788292865442_1099744020463292871_n.jpg?_nc_cat=100&_nc_sid=8bfeb9&_nc_ohc=7YrcIBYlA4oAX_8YBwD&_nc_ht=scontent.fcpt7-1.fna&oh=6064303e42f695ce8e5785a71af9fa3d&oe=5F4CBD3B",
      name: "Kim💜🍃",
      message: "✓ Boogie Woogie really is...",
      time: "15:39",
    },
    {
      img:
        "https://scontent.fcpt7-1.fna.fbcdn.net/v/t1.0-9/116914428_942788286198776_8862159367019768073_n.jpg?_nc_cat=104&_nc_sid=8bfeb9&_nc_ohc=xCaClC3c-s4AX-cYpKL&_nc_ht=scontent.fcpt7-1.fna&oh=d9c9f24a21faefe58886e688cf40ba21&oe=5F4AF1A6",
      name: "Nala🍵🐸",
      message: "lol it's our inside meme and...",
      time: "14:53",
    },
    {
      img:
        "https://scontent.fcpt7-1.fna.fbcdn.net/v/t1.0-9/116721653_942788282865443_1702655637001663442_n.jpg?_nc_cat=105&_nc_sid=8bfeb9&_nc_ohc=8Vv0jOKlAsIAX_PSI0r&_nc_ht=scontent.fcpt7-1.fna&oh=0cef53b374c2ba60ec66516ae3fb1cf7&oe=5F4AD372",
      name: "Kayleen🤠",
      message: "When last did you see your...",
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
