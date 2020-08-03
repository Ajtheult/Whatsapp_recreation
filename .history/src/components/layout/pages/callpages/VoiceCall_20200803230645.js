import React, { Component } from "react";
import PhoneCallNav from "../../navbar/PhoneCallNav";

export class VoiceCall extends Component {
  render() {
    return (
      <div>
        <PhoneCallNav />

        <footer class="page-footer down">
          <div class="container">
            © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">
              More Links
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default VoiceCall;
