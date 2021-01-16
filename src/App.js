import React from "react";
import Home from "./components/Home";
import Profile from "./components/Profile";

class App extends React.Component {
  state = {
    name: "hayat",
  };
  changename(name) {
    this.setState({
      name: name,
    });
  }
  render() {
    return (
      <div className="App">
        <Home handlenamechild={(name) => this.changename(name)} />
        <Profile name={this.state.name} />
        <h1>i am app{this.state.name}</h1>
      </div>
    );
  }
}

export default App;
