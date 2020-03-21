import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import  {Container}  from "@material-ui/core";

export default class CryptoNavBar extends Component {

  handleClick = (name) => {
      this.props.handleCryptoName(name)
  };

  render() {
    return (
      <Container style={{marginBottom: "30px"}}>
        <Grid container justify="center" spacing={5}>
          <Grid item xs="auto">
            <Button
              name="btc"
              variant="contained"
              color="primary"
              onClick={e => this.handleClick(e.currentTarget.name)}
            >
              BTC
            </Button>
          </Grid>
          <Grid item xs="auto">
            <Button
              name="eth"
              variant="contained"
              color="primary"
              onClick={e => this.handleClick(e.currentTarget.name)}
            >
              ETH
            </Button>
          </Grid>
          <Grid item xs="auto">
            <Button
              name="bch"
              variant="contained"
              color="primary"
              onClick={e => this.handleClick(e.currentTarget.name)}
            >
              BCH
            </Button>
          </Grid>
          <Grid item xs="auto">
            <Button
              name="eos"
              variant="contained"
              color="primary"
              onClick={e => this.handleClick(e.currentTarget.name)}
            >
              EOS
            </Button>
          </Grid>
          <Grid item xs="auto">
            <Button
              name="xrp"
              variant="contained"
              color="primary"
              onClick={e => this.handleClick(e.currentTarget.name)}
            >
              XRP
            </Button>
          </Grid>
        </Grid>
        </Container>
    );
  }
}
