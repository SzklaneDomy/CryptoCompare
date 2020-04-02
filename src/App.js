import React, { Component } from "react";
import "./App.css";
import shortid from "shortid";
import moment from "moment";

import Logo from "./components/Logo";
import Graph from "./components/Graph";
import CryptoNavBar from "./components/CryptoNavBar";
import About from "./components/About";

import * as apiCall from "./apiCall";

class App extends Component {
  state = {
    historicalData: null,
    graphData: []
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
        const data = {
          name: name,
          id: shortid.generate(),
          // dates: this.state.historicalData.map(el =>
          //   moment.unix(el.time).format("MM/DD/YYYY")
          // ),
          // prices: this.state.historicalData.map(
          //   el => Math.round(el.high + el.low * 100) / 100
          // )
          data: this.state.historicalData.map(el => {
            return {
              dates: moment.unix(el.time).format("MM/DD/YYYY"),
              prices: Math.round(el.high + el.low * 100) / 100
            };
          })
        };
        this.setState({ graphData: [...this.state.graphData, data] });
        console.log(this.state);
      });
  };

  handleDelete = id => {
    this.setState({
      graphData: this.state.graphData.filter(el => el.id !== id)
    });
  };

  render() {
    return (
      <div className="App">
        <Logo />
        <CryptoNavBar handleCryptoName={this.getApiData} />
        <About />
        {this.state.graphData.length ? (
          <Graph data={this.state.graphData} handleDelete={this.handleDelete} />
        ) : null}
      </div>
    );
  }
}

export default App;
