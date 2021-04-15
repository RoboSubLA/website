import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// pages import
import Home from "./pages/main_pages/Home";
import SignUp from "./pages/main_pages/SignUp";
import TheFleet from "./pages/main_pages/TheFleet";
import Members from "./pages/main_pages/Members";
import Resources from "./pages/main_pages/Resources";

// sub pages import
import Lanturn from "./pages/subpages/Lanturn";
import Donphan from "./pages/subpages/Donphan";
import Gyarados from "./pages/subpages/Gyarados";
import Magikarp from "./pages/subpages/Magikarp";

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
          <Route path="/lanturn" component={Lanturn} />
          <Route path="/donphan" component={Donphan} />
          <Route path="/gyarados" component={Gyarados} />
          <Route path="/magikarp" component={Magikarp} />
          
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
