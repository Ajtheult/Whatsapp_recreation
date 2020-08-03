import React, { Component } from "react";
import PhoneCallNav from "../../navbar/PhoneCallNav";

export class VoiceCall extends Component {
  render() {
    return (
      <div>
        <PhoneCallNav />

        <footer class="page-footer voicecall_footer"></footer>
      </div>
    );
  }
}

export default VoiceCall;
