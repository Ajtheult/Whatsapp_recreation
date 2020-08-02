import React, { Component } from "react";
import M from "materialize-css";
import "../../../App.css";

export class LandingPage extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".modal");
      // eslint-disable-next-line
      var instances = M.Modal.init(elems, {});
    });
  }
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
        <a class="waves-effect waves-light btn modal-trigger" href="#modal1">
          Disclaimer
        </a>

        <div id="modal1" class="modal">
          <div class="modal-content">
            <h5>
              This app was created with react and is not intended to function
              exactly as the original Whatsapp. <br /> <br /> If you understand
              this press "okay".
            </h5>
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">
              okay
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
