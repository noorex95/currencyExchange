import React, { Component } from 'react';

class ResultExchange extends Component {
  render() {
    const result = this.props.exchangeResult * this.props.exchangeRate
    return(
      <span><p>Result of Exchange: {result}</p></span>
    )
  }
}

//https://codepen.io/kopralstivens/pen/XGvRZb
export default ResultExchange;