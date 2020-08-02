import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import "../../../App.css";
const ChatMenu = () => {
  const [contacts] = useState([
    {
      img:
        "https://cdn.pixabay.com/photo/2015/05/29/22/46/music-789935_960_720.jpg",
      name: "🎹Asaph🎹",
      message: "So yeah thats why I've been...",
      time: "17:36",
    },
    {
      img:
        "https://cdn.pixabay.com/photo/2016/12/07/09/32/white-male-1889033_960_720.jpg",
      name: "😂Reegen AKA Heindrick😂",
      message: "✓ Joh vhet bruh🤣I need a...",
      time: "17:21",
    },
    {
      img:
        "https://cdn.pixabay.com/photo/2016/11/09/23/16/music-1813100_960_720.png",
      name: "Kim💜🍃",
      message: "✓ Boogie Woogie really is...",
      time: "15:39",
    },
    {
      img:
        "https://cdn.pixabay.com/photo/2017/01/27/16/09/people-2013447_960_720.jpg",
      name: "Nala🍵🐸",
      message: "lol it's our inside meme and...",
      time: "14:53",
    },
    {
      img:
        "https://cdn.pixabay.com/photo/2018/04/26/07/03/pretty-3351294_1280.png",
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
                className="profile_pictures modal-trigger waves-effect waves-light"
                src={contact.img}
                alt={contact.name}
                href="#modal1"
              />
            </div>
            <div className="col s7 chat_menu_text">
              <h6 className="contact_name_cm">{contact.name}</h6>
              <p className="contact_menu_messages">{contact.message}</p>
            </div>
            <div className="col s2 cm_time">{contact.time}</div>
            <div className="divider decrease_height" />

            <div id="modal1" class="modal">
              <div class="modal-content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
              </div>
              <div class="modal-footer">
                <a
                  href="#!"
                  class="modal-close waves-effect waves-green btn-flat"
                >
                  Agree
                </a>
              </div>
            </div>
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
