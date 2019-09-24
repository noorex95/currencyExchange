import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './css/ResultExchange.css'

class ResultExchange extends Component {
  result = () =>
  (this.props.exchangeInput * this.props.exchangeRate).toFixed(2)

  render = () =>
   (
     <div className='result-exchange'>
        <span><p>Result of Exchange: {this.result()}</p></span>
     </div>
   )
}

ResultExchange.propTypes = {
	exchangeInput: PropTypes.string,
	exchangeRate: PropTypes.number
}


export default ResultExchange;
