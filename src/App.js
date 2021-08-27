import React, { Component } from "react";

import "./App.css";
import Navigation from "./components/Navigation/Navigation";

import NAV_DATA from "./NavigationData";

class App extends Component {
  state = {
    NAV_DATA: NAV_DATA,
  };
  render() {
    const { NAV_DATA } = this.state;

    return (
      <div className="App">
        <Navigation NAV_DATA={NAV_DATA} />
      </div>
    );
  }
}
export default App;
