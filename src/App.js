import React, { Component } from "react";
import Stopwatch from "./stopwatch/components/Stopwatch";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Stopwatch />
      </div>
    );
  }
}
export default App;