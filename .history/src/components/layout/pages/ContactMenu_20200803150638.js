import React, { useState } from "react";
import ContactNav from "../navbar/ContactNav";
import "../../../App.css";
const ContactMenu = () => {
  const [contacts] = useState([
    {
      img:
        "https://scontent.fcpt7-1.fna.fbcdn.net/v/t1.0-9/106269353_921949158282689_2965407331543375300_n.jpg?_nc_cat=101&_nc_sid=730e14&_nc_ohc=LtsdmLQqirkAX8xdEQS&_nc_ht=scontent.fcpt7-1.fna&oh=8d6c4155d2143c2f96fc2819c02f45ea&oe=5F4C0589",
      name: "Asaph🎹",
      message: "So yeah thats why I've been...",
    },
    {
      img:
        "https://images.unsplash.com/photo-1505995433366-e12047f3f144?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=764&q=80",
      name: "Aden😸🔹",
    },
    {
      img:
        "https://images.unsplash.com/photo-1487035242901-d419a42d17af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=368&q=80",
      name: "❤Jaymee❤",
      message: "So yeah thats why I've been...",
    },
    {
      img:
        "https://images.unsplash.com/photo-1460036521480-ff49c08c2781?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80",
      name: "🎻Violin🎻",
      message: "So yeah thats why I've been...",
    },
    {
      img:
        "https://images.unsplash.com/photo-1527683611643-4009f3a76197?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      name: "❣🐐Aaren🐐❣",
      message: "So yeah thats why I've been...",
    },
    {
      img:
        "https://images.unsplash.com/photo-1485278537138-4e8911a13c02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      name: "Conway🎸",
      message: "So yeah thats why I've been...",
    },
    {
      img:
        "https://images.unsplash.com/photo-1516222338250-863216ce01ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
      name: "Kristen👽",
      message: "love yourself .🤸 xx",
    },
    {
      img:
        "https://images.unsplash.com/photo-1504439158909-5a2f08876082?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
      name: "Ma mom❤",
      message: "So yeah thats why I've been...",
    },
    {
      img:
        "https://images.unsplash.com/photo-1510775750777-c6a9f669e051?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      name: "Cher😄❤",
      message: "So yeah thats why I've been...",
    },
    {
      img:
        "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      name: "Keziah",
      message: "🌻",
    },
    {
      img:
        "https://images.unsplash.com/photo-1511825869128-e85768033761?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      name: "Shehaam",
      message: "So yeah thats why I've been...",
    },
    {
      img:
        "https://images.unsplash.com/photo-1460551204960-763bc82b7d8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
      name: "Taryn",
      message: "So yeah thats why I've been...",
    },
    {
      img:
        "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      name: "Viata🙈",
      message: "So yeah thats why I've been...",
    },
    {
      img:
        "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
      name: "Jamie🎈",
      message: "So yeah thats why I've been...",
    },

    {
      img:
        "https://scontent.fcpt7-1.fna.fbcdn.net/v/t1.0-9/116707589_942788272865444_6787909632624596434_n.jpg?_nc_cat=105&_nc_sid=8bfeb9&_nc_ohc=HgV5qHSEVm0AX8XvP1B&_nc_ht=scontent.fcpt7-1.fna&oh=73ad4663ca58cb26d83f1aa79b9813db&oe=5F4CB6B6",
      name: "😂Reegen AKA Heindrick😂",
      message: "It's okay if you forget me",
    },
    {
      img:
        "https://scontent.fcpt7-1.fna.fbcdn.net/v/t1.0-9/116686514_942788292865442_1099744020463292871_n.jpg?_nc_cat=100&_nc_sid=8bfeb9&_nc_ohc=7YrcIBYlA4oAX_8YBwD&_nc_ht=scontent.fcpt7-1.fna&oh=6064303e42f695ce8e5785a71af9fa3d&oe=5F4CBD3B",
      name: "Kim💜🍃",
    },
    {
      img:
        "https://scontent.fcpt7-1.fna.fbcdn.net/v/t1.0-9/116914428_942788286198776_8862159367019768073_n.jpg?_nc_cat=104&_nc_sid=8bfeb9&_nc_ohc=xCaClC3c-s4AX-cYpKL&_nc_ht=scontent.fcpt7-1.fna&oh=d9c9f24a21faefe58886e688cf40ba21&oe=5F4AF1A6",
      name: "Nala🍵🐸",
      message: "🍃🌟",
    },
    {
      img:
        "https://scontent.fcpt7-1.fna.fbcdn.net/v/t1.0-9/116721653_942788282865443_1702655637001663442_n.jpg?_nc_cat=105&_nc_sid=8bfeb9&_nc_ohc=8Vv0jOKlAsIAX_PSI0r&_nc_ht=scontent.fcpt7-1.fna&oh=0cef53b374c2ba60ec66516ae3fb1cf7&oe=5F4AD372",
      name: "Kayleen🤠",
      message: "Hey there! I am using WhatsApp.",
    },
  ]);
  return (
    <div>
      <ContactNav />

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
              <p className="contact_menu_messages">{contact.message}</p>
            </div>

            <div className="divider decrease_height" />
          </div>
        ))}
      </div>

      {/* Bottom of page */}
    </div>
  );
};

export default ContactMenu;
