import React from "react";
import ChatMenu from "./components/layout/pages/ChatMenu";
import { BrowserRouter as Route, Router, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={ChatMenu} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
