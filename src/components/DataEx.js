import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './css/DataEx.css'

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
      <div className='content'>
        <div className='header'><h1>Currency Exchange</h1></div>
          <form>
            <div className='select__wrapper'>
              <select className='header__select' value={this.props.selectValueFirst} onChange={this.props.handleChangeFirstSelect}>
                {this.chooseItemFirstSelect()}
              </select>
              <select className='header__select' value={this.props.selectValueSecond} onChange={this.props.handleChangeSecondSelect}>
                {this.chooseItemSecondSelect()}
              </select>
            </div>
            <div className='input__wrapper'>
              <input
                className='header__input'
                type='number'
                placeholder='Введите сумму'
                value={this.props.exchangeInput}
                onChange={this.props.handleChangeMoney}>
              </input>
            </div>
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
  selectValueFirst: PropTypes.string.isRequired,
  handleChangeFirstSelect: PropTypes.func.isRequired,
  selectValueSecond: PropTypes.string.isRequired,
  handleChangeSecondSelect: PropTypes.func.isRequired,
  exchangeInput: PropTypes.string,
  handleChangeMoney: PropTypes.func
}

export default DataEx;
