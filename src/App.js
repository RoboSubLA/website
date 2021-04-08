import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// pages import
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import TheFleet from "./components/pages/TheFleet";
import Members from "./components/pages/Members";
import Resources from "./components/pages/Resources";

// sub pages import
import Lanturn from "./components/pages/subpages/Lanturn";
import Donphan from "./components/pages/subpages/Donphan";
import Gyarados from "./components/pages/subpages/Gyarados";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/thefleet" component={TheFleet} />
          <Route path="/members" component={Members} />
          <Route path="/resources" component={Resources} />
          <Route path="/sign-up" component={SignUp} />

          {/* routes to sub pages */}
          <Route path="/lanturn" componenet={Lanturn} />
          <Route path="/donphan" componenet={Donphan} />
          <Route path="/gyarados" component={Gyarados} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
