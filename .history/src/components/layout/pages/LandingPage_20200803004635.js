import React, { Component } from "react";
import M from "materialize-css";
export class LandingPage extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".tap-target");
      //eslint-disable-next-line
      var instances = M.TapTarget.init(elems, {});
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

        <a id="menu" class="waves-effect waves-light btn btn-floating">
          <i class="material-icons">menu</i>
        </a>

        <div class="tap-target btn" data-target="menu">
          <div class="tap-target-content">
            <h5>Title</h5>
            <p>A bunch of text</p>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
