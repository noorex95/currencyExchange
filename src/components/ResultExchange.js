import React, { Component } from 'react';

class ResultExchange extends Component {
  
  result = () => 
  (this.props.exchangeInput * this.props.exchangeRate).toFixed(2)
  
  render = () => 
   (
      <span><p>Result of Exchange: {this.result()}</p></span>
   )
}

export default ResultExchange;

