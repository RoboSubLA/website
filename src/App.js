import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// pages import
import Home from "./pages/main_pages/Home/Home";
import SignUp from "./pages/main_pages/SignUp/SignUp";
import TheFleet from "./pages/main_pages/TheFleet/TheFleet";
import Members from "./pages/main_pages/Members/Members";
import Resources from "./pages/main_pages/Resources/Resources";
import Events from "./pages/main_pages/Events/Events";

// sub pages import
import Lanturn from "./pages/subpages/Lanturn";
import Donphan from "./pages/subpages/Donphan";
import Gyarados from "./pages/subpages/Gyarados/Gyarados";
import Magikarp from "./pages/subpages/Magikarp/Magikarp";
import ThisYear from "./pages/subpages/ThisYear/ThisYear";
import ThisYear1 from "./pages/subpages/ThisYear1/ThisYear1";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/TheFleet" component={TheFleet} />
          <Route path="/Members" component={Members} />
          <Route path="/Resources" component={Resources} />
          <Route path="/Events" component={Events} />
          <Route path="/sign-up" component={SignUp} />
          {/* routes to sub pages */}
          <Route path="/Lanturn" component={Lanturn} />
          <Route path="/Donphan" component={Donphan} />
          <Route path="/Gyarados" component={Gyarados} />
          <Route path="/Magikarp" component={Magikarp} /> 
		  <Route path="/ThisYear" component={ThisYear} />
		  <Route path="/ThisYear1" component={ThisYear1} /> */}
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
export default App;
