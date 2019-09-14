import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ResultExchange extends Component {

  result = () =>
  (this.props.exchangeInput * this.props.exchangeRate).toFixed(2)

  render = () =>
   (
      <span><p>Result of Exchange: {this.result()}</p></span>
   )
}

ResultExchange.propTypes = {
	exchangeInput: PropTypes.string,
	exchangeRate: PropTypes.number
}


export default ResultExchange;
