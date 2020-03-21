import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div style={{ position: "absolute", bottom: "0", width: "100%" }}>
        <h3 style={{ fontWeight: "100" }}>
          Made by <a href="https://github.com/SzklaneDomy">@SzklaneDomy</a>
        </h3>
      </div>
    );
  }
}
