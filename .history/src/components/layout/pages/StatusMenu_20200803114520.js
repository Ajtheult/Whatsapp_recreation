/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import "../../../App.css";
const ChatMenu = () => {
  const [contacts] = useState([
    {
      img:
        "https://scontent.fcpt7-1.fna.fbcdn.net/v/t1.0-9/116581782_941703632973908_4348769842803838687_o.jpg?_nc_cat=107&_nc_sid=730e14&_nc_ohc=FSelJ9FytbAAX8uDKJh&_nc_oc=AQm33hp4JBnl1WL8P9J4gBFFE2MHuDZAe-D08rH2cAw34zXAjjy3YHuWqUFSRc8YCLI&_nc_ht=scontent.fcpt7-1.fna&oh=bd883a6c3e6728203532559e60e86270&oe=5F4C9240",
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
        <div className="col s6 chat_menu_text">
          <h6 className="contact_name_cm">Asaph🎹</h6>
          <p className="contact_menu_messages">7 minutes ago</p>
        </div>
        <div className="col s3">
          <i class="fas fa-ellipsis-h move_ellipsis"></i>
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
        <div className="divider increase_height_status">
          <h6 className="move_recent_updates">Viewed updates</h6>
        </div>
        <div className="col s3">
          <img
            className="viewed_status"
            src="https://images.unsplash.com/photo-1516410529446-2c777cb7366d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
            alt="img"
          />
        </div>
        <div className="col s9 chat_menu_text">
          <h6 className="contact_name_cm">Aaren🕵</h6>
          <p className="contact_menu_messages">Yesterday, 16:41</p>
        </div>
      </div>

      {/* Bottom of page */}

      <Link to="#write">
        <button className="btn-floating btn-small waves-effect waves-light green right move_message_icon_in_status_menu_small pulse">
          <i className="fas fa-pen " />
        </button>
      </Link>
      <Link to="#post_status">
        <button className="btn-floating btn-large green right move_message_icon_in_status_menu_big">
          <i className="fas fa-camera" />
        </button>
      </Link>
    </div>
  );
};

export default ChatMenu;
