import React, { Component } from 'react';

class ResultExchange extends Component {
  render() {
    const result = (this.props.exchangeInput * this.props.exchangeRate).toFixed(2)
    return (
      <span><p>Result of Exchange: {result}</p></span>
    )
  }
}

export default ResultExchange;