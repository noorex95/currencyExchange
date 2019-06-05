import React, { Component } from 'react';
import DataEx from './components/DataEx'
import ResultExchange from './components/ResultExchange'

class App extends Component {
  
  state = {
    exchangeRate: [2.14, 2.41, 2.67], 
    exchangeResult: '', 
    value: 0,
  }//edit state with add objects in array



  handleChangeMoney = (event) => {
    this.setState({exchangeResult: event.target.value})
  }//input with money, who need exchange

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }//select the desired exchange rate
  
  
  
  render() {

    const menu = <DataEx 
      exchangeResult={this.state.exchangeResult} 
      handleChangeMoney={(event) => this.handleChangeMoney(event)} 
      value={this.state.value} 
      handleChange={(event) => this.handleChange(event)}
      />

    const exResult = <ResultExchange 
    exchangeResult={this.state.exchangeResult} 
    exchangeRate={this.state.exchangeRate[this.state.value]} 
    />

    return (
      <div>
        {menu}
        {exResult}
      </div>
    )
  }
}



export default App;
