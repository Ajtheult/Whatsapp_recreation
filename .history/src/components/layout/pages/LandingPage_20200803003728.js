import React, { Component } from "react";

export class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="bg-color">
          <img
            src="https://images.unsplash.com/photo-1523365237953-9f36b3c8cada?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            className="bg"
            alt="bg"
          />
        </div>
        <div className="white">
          <i class="fab fa-whatsapp" />
        </div>
      </div>
    );
  }
}

export default LandingPage;
