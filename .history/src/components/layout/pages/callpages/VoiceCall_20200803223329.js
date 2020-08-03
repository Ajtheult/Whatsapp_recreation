import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

export class VoiceCall extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".dropdown-trigger");
      //eslint-disable-next-line
      var instances = M.Dropdown.init(elems, {});
    });
  }
  render() {
    return <div></div>;
  }
}

export default VoiceCall;
