import React, { Component } from 'react';
import DataEx from './components/DataEx'
import ResultExchange from './components/ResultExchange'

class App extends Component {
  
  state = {
    exchangeRateBYN: [2.14, 2.41, 2.67, 1], 
    exchangeRateUSD: [1, 1.14, 1.27, 0.49], 
    exchangeRateEUR: [0.88, 1, 1.12, 0.43], 
    exchangeRateGBP: [0.79, 0.89, 1, 0.39], 
    exchangeInput: '', 
    selectValueFirst: 0, selectValueSecond: 0
  }



  handleChangeMoney = (event) => {
    this.setState({exchangeInput: event.target.value})
  }//input with money, who need exchange

  handleChangeFirstSelect = (event) => {
    this.setState({selectValueFirst: event.target.value})
  }//first select
  
  handleChangeSecondSelect = (event) => {
    this.setState({selectValueSecond: event.target.value})
  }//second select
  



  exchangeCondition = () => {
    if (this.state.selectValueSecond === '0') {
      return <ResultExchange 
      exchangeInput={this.state.exchangeInput} 
      exchangeRate={this.state.exchangeRateUSD[this.state.selectValueFirst]} />
    }
    else if (this.state.selectValueSecond === '1') {
      return <ResultExchange 
      exchangeInput={this.state.exchangeInput} 
      exchangeRate={this.state.exchangeRateEUR[this.state.selectValueFirst]} />
    }
    else if (this.state.selectValueSecond === '2') {
      return <ResultExchange 
      exchangeInput={this.state.exchangeInput} 
      exchangeRate={this.state.exchangeRateGBP[this.state.selectValueFirst]} />
    }
    else if (this.state.selectValueSecond === '3') {
      return <ResultExchange 
      exchangeInput={this.state.exchangeInput} 
      exchangeRate={this.state.exchangeRateBYN[this.state.selectValueFirst]} />
    }
    else return <p>Result of Exchange:</p>
  }//Method with condition for exchange currency
  



  render() {
    const menu = <DataEx 
      exchangeInput={this.state.exchangeInput} 
      handleChangeMoney={(event) => this.handleChangeMoney(event)} 
      selectValueFirst={this.state.selectValueFirst} 
      selectValueSecond={this.state.selectValueSecond} 
      handleChangeFirstSelect={(event) => this.handleChangeFirstSelect(event)} 
      handleChangeSecondSelect={(event) => this.handleChangeSecondSelect(event)}
      />
   

    return (
      <div>
        {menu}
        {this.exchangeCondition()}
      </div>
    )
  }
}


export default App;
