import React from "react";
import ChatMenu from "./components/layout/pages/ChatMenu";
import StatusMenu from "./components/layout/pages/StatusMenu";
import CallMenu from "./components/layout/pages/CallMenu";
import ContactMenu from "./components/layout/pages/ContactMenu";
import LandingPage from "./components/layout/pages/preapp/LandingPage";
import VoiceCall from "./components/layout/pages/callpages/VoiceCall";
import VideoCall from "./components/layout/pages/callpages/VideoCall";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/chat" component={ChatMenu} />
          <Route path="/contact" component={ContactMenu} />
          <Route path="/status" component={StatusMenu} />
          <Route path="/calls" component={CallMenu} />
          <Route path="/voice-call" component={VoiceCall} />
          <Route path="/video-call" component={VideoCall} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
