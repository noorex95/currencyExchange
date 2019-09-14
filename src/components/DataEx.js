import React, { Component } from 'react';
import PropTypes from 'prop-types'

class DataEx extends Component {
  state = {
    currencyItemFirstSelect: [
      {id: 0, currency: 'USD'},
      {id: 1, currency: 'EUR'},
      {id: 2, currency: 'GBP'},
      {id: 3, currency: 'BYN'}
    ],
    currencyItemSecondSelect: [
      {id: 0, currency: 'USD'},
      {id: 1, currency: 'EUR'},
      {id: 2, currency: 'GBP'},
      {id: 3, currency: 'BYN'}
    ]
  }

  chooseItemFirstSelect = () =>
    this.state.currencyItemFirstSelect.map(item =>
      (
        <option key={item.id} value={item.id}>
          {item.currency}
        </option>
      )
    )
  chooseItemSecondSelect = () =>
    this.state.currencyItemSecondSelect.map(item =>
      (
        <option key={item.id} value={item.id}>
          {item.currency}
        </option>
      )
    )

  dataResult = () =>
    (
      <div>
        <p>Currency Exchange</p>
        <form>
          <select value={this.props.selectValueFirst} onChange={this.props.handleChangeFirstSelect}>
            {this.chooseItemFirstSelect()}
          </select>
          <select value={this.props.selectValueSecond} onChange={this.props.handleChangeSecondSelect}>
            {this.chooseItemSecondSelect()}
          </select>
          <input
            type='number'
            placeholder='Введите сумму'
            value={this.props.exchangeInput}
            onChange={this.props.handleChangeMoney}>
          </input>
        </form>
      </div>
    )

  render = () =>
    (
      <div>
        {this.dataResult()}
      </div>
    )
}

DataEx.propTypes = {
  selectValueFirst: PropTypes.string,
  handleChangeFirstSelect: PropTypes.func,
  selectValueSecond: PropTypes.string,
  handleChangeSecondSelect: PropTypes.func,
  exchangeInput: PropTypes.string,
  handleChangeMoney: PropTypes.func
}

export default DataEx;
