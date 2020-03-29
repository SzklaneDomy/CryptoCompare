import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";

export default class CryptoNavBar extends Component {
  state = {
    currencies: ["BTC", "ETH", "BCH", "BSV", "EOS", "ETC"]
  };

  handleClick = name => {
    this.props.handleCryptoName(name);
    
  };

  render() {
    return (
      <Container style={{ marginBottom: "30px" }}>
        <Grid container justify="center" spacing={5}>
          {this.state.currencies.map(item => (
            <Grid item xs="auto" key={item}>
              <Button
                name={item}
                variant="contained"
                color="primary"
                onClick={e => this.handleClick(e.currentTarget.name)}
              >
                {item}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
}
