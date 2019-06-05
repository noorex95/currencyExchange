import React, { Component } from 'react';

class DataEx extends Component {

  render() {

    const currencyItem = [{id: 0, currency: 'USD'}, {id: 1, currency: 'EUR'}, {id: 2, currency: 'GBP'}]
    const chooseItem = currencyItem.map(item => {
      return ( 
        <option 
        key={item.id} 
        value={item.id}>
          {item.currency}
        </option>
      )})


    return (

      <div>
        <p>Currency Exchange</p>
        <form>

          <select 
          value={this.props.value} onChange={this.props.handleChange}>
            {chooseItem}
          </select>

          <select>
            <option>BYN</option>
          </select>

          <input 
            type='number' 
            placeholder='Введите сумму' 
            value={this.props.exchangeResult} 
            onChange={this.props.handleChangeMoney}>
          </input>

        </form>
      </div>
    )
  }
}

export default DataEx;