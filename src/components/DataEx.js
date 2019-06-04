import React, { Component } from 'react';

class DataEx extends Component {
  render() {
    return (
      <div>
        <p>Currency Exchange</p>
        <form> 
          <select>
            <option>Usd</option>
            <option>Eur</option>
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