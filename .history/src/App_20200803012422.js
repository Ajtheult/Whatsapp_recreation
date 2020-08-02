import React from "react";
import ChatMenu from "./components/layout/pages/ChatMenu";
import StatusMenu from "./components/layout/pages/StatusMenu";
import CallMenu from "./components/layout/pages/CallMenu";
import LandingPage from "./components/layout/pages/preapp/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/chat" component={ChatMenu} />
          <Route path="/status" component={StatusMenu} />
          <Route path="/calls" component={CallMenu} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
