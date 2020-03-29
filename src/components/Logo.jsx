import React, { Component } from "react";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import Grid from "@material-ui/core/Grid";

class Logo extends Component {
  render() {
    return (
      <Grid container justify="center">
        <Grid item>
          <h1 style={{ fontWeight: "300", fontSize: "70px" }}>
            CryptoIndex <TrendingUpIcon style={{ fontSize: "70px" }} />
          </h1>
          <h3 style={{ fontWeight: "100", marginTop: "-10px" }}>
            Prices of the most popular cryptocurrencies
          </h3>
        </Grid>
      </Grid>
    );
  }
}

export default Logo;
