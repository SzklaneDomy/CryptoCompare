import React, { Component } from "react";
import { Container } from "@material-ui/core";

export default class About extends Component {
  render() {
    return (
        <div style={{ position: "relative", paddingBottom: "10px"}}>
          <h3 style={{ fontWeight: "100" }}>
            Made by <a href="https://github.com/SzklaneDomy">@SzklaneDomy</a>
          </h3>
        </div>
    );
  }
}
