import React, { Component } from "react";

export class Home extends Component {
  state = {
    homename: "ALI",
  };

  render() {
    return (
      <div>
        <h1>i am home name page</h1>
        <button
          onClick={(name) => this.props.handlenamechild(this.state.homename)}
        >
          click me
        </button>
      </div>
    );
  }
}

export default Home;
