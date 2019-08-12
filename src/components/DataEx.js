import React, { Component } from 'react';

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
    this.state.currencyItemFirstSelect.map(item => {
      return ( 
        <option key={item.id} value={item.id}>
          {item.currency}
        </option>
      )
    })
  chooseItemSecondSelect = () => 
    this.state.currencyItemSecondSelect.map(item => {
      return (
        <option key={item.id + 3} value={item.id}>
          {item.currency}
        </option>
      )
    })

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

  render() {
    return (
      <div>
        {this.dataResult()}
      </div>
    )
  }
}

export default DataEx;
