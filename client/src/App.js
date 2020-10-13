import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/Navbar.js";
import Search from "./pages/Search";
// import Saved from "./pages/Saved";
import "./App.css";

function App() {
  return (
      <Router>
        <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          {/* <Route exact path="/saved" component={Saved} /> */}
        </Switch>
        </div>
      </Router>
  );
};

export default App;