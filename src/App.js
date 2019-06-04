import React, { Component } from 'react';
import DataEx from './components/DataEx'
import ResultExchange from './components/ResultExchange'

class App extends Component {
  
  state = {
    exchangeRate: [2.14, 2.41], 
    currencyList: ['Usd', 'Eur'], 
    exchangeBLR: 'BYN', 
    exchangeResult: '',
  }//edit state with add objects in array


  

  handleChangeMoney = (event) => {
    this.setState({exchangeResult: event.target.value})
  }//input with money, who need exchange

  


  
  render() {
    const menu = <DataEx 
      exchangeResult={this.state.exchangeResult} 
      handleChangeMoney={(event) => this.handleChangeMoney(event)} 
      />

    const exResult = <ResultExchange 
    exchangeResult={this.state.exchangeResult} 
    exchangeRate={this.state.exchangeRate[0]} 
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
//<span><p>Result of Exchange: {result}</p></span>
//const result = this.state.exchangeResult * this.state.exchangeRate[0]
