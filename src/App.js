import React, { Component } from "react";
import "./App.css";
import moment from "moment";

import Logo from "./components/Logo";
import Graph from "./components/Graph";
import CryptoNavBar from "./components/CryptoNavBar";
import About from "./components/About";

import * as apiCall from "./apiCall";

class App extends Component {
  state = {
    historicalData: null,
    graphData: [],
  };

  getApiData = name => {
    apiCall
      .makeApiCall(name)
      .then(res => {
        this.setState({
          historicalData: res.Data.Data
        });
      })
      .then(() => {
        const data = this.state.historicalData.map(el => {
          return {
            date: moment.unix(el.time).format("MM/DD/YYYY"),
            price: Math.floor(el.high + el.low / 2),
            name: name,
          };
        });
        this.setState({ graphData: [...this.state.graphData, data] });
        console.log(this.state);
      });
  };

  render() {
    return (
      <div className="App">
        <Logo />
        <CryptoNavBar handleCryptoName={this.getApiData} />
        <About />
        {this.state.graphData.length ? <Graph data={this.state.graphData} /> : null}
      </div>
    );
  }
}

export default App;
