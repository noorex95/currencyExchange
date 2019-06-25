import React, { Component } from 'react';

class DataEx extends Component {

  render() {
    const currencyItemFirstSelect = [{id: 0, currency: 'USD'}, {id: 1, currency: 'EUR'}, {id: 2, currency: 'GBP'}, {id: 3, currency: 'BYN'}]
    const currencyItemSecondSelect = [{id: 0, currency: 'USD'}, {id: 1, currency: 'EUR'}, {id: 2, currency: 'GBP'}, {id: 3, currency: 'BYN'}]
    const chooseItemFirstSelect = currencyItemFirstSelect.map(item => {
      return ( 
        <option key={item.id} value={item.id}>
            {item.currency}
        </option>
      )
    })
    const chooseItemSecondSelect = currencyItemSecondSelect.map(item => {
      return (
        <option key={item.id + 3} value={item.id}>
            {item.currency}
        </option>
      )
    })//output currency for select from the array




    return (
      <div>
        <p>Currency Exchange</p>
        <form>
          <select value={this.props.selectValueFirst} onChange={this.props.handleChangeFirstSelect}>
            {chooseItemFirstSelect}
          </select>

          <select value={this.props.selectValueSecond} onChange={this.props.handleChangeSecondSelect}>
            {chooseItemSecondSelect}
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
  }
}

export default DataEx;