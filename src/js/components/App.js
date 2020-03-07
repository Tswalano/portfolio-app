import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  render() {
    return (
      <>
        <div className="py-5 text-center centered">
          <img
            className="d-block mx-auto mb-4"
            src="/src/assets/img/icon.png"
            alt=""
            width="250"
            height="250"
          />
          <h2>Tswalano</h2>
          <p className="lead">This is my portfolio, Nice to see you here!!!</p>
        </div>
      </>
    );
  }
}

export default App;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
