import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <header>
          <form id="to-do-form">
            <input type="text" placeholder="Enter Text" />
            <button type="submit">Add</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
