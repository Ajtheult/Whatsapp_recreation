import React, { Component } from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";
import "../../../../App.css";

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
        <button
          className="waves-effect waves-light btn modal-trigger move_this_modal"
          href="#modal1"
        >
          Whatsapp recreation button
        </button>

        <div id="modal1" className="modal">
          <div className="modal-content">
            <h5>
              <b> Disclaimer</b>{" "}
            </h5>
            <h5>
              This react app was mainly created for mobile use, but is not
              intended to function exactly as the original Whatsapp application.{" "}
              <br />
              <br />
              Buttons that are lighter have no functionality.If a button
              functions It will pulse.
              <br /> <br /> If you understand this press "launch app". <br /> If
              you don't then press "I don't understand".
            </h5>
          </div>
          <div className="modal-footer">
            <button className="modal-close waves-effect waves-green btn-large left red">
              I don't understand
            </button>

            <Link to="/chat">
              <button className="modal-close waves-effect waves-green btn-large">
                launch app
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
