import React, { Component } from 'react';
import DataEx from './components/DataEx'
import ResultExchange from './components/ResultExchange'
import CurrencyRate from './components/CurrencyRate'
import GetData from './components/GetData'

class App extends Component {
  state = { 
    exchangeRateUSD: [1, 1.14, 1.27, 0.49], 
    exchangeRateEUR: [0.88, 1, 1.12, 0.43], 
    exchangeRateGBP: [0.79, 0.89, 1, 0.39], 
    exchangeRateBYN: [2.05, 2.34, 2.67, 1], 
    exchangeInput: '', 
    selectValueFirst: '0', selectValueSecond: '0', 
  }//Array in exchangeRate sort by [USD, EUR, GBP, BYN]

  handleChangeMoney = (event) => {
    this.setState({exchangeInput: event.target.value})
  }
  handleChangeFirstSelect = (event) => {
    this.setState({selectValueFirst: event.target.value})
  }
  handleChangeSecondSelect = (event) => {
    this.setState({selectValueSecond: event.target.value})
  }

  exchangeCondition = () => {
    switch (this.state.selectValueSecond) {
        case '0':
        return <ResultExchange 
        exchangeInput={this.state.exchangeInput} 
        exchangeRate={this.state.exchangeRateUSD[this.state.selectValueFirst]} />
        case '1':
        return <ResultExchange 
        exchangeInput={this.state.exchangeInput} 
        exchangeRate={this.state.exchangeRateEUR[this.state.selectValueFirst]} />
        case '2':
        return <ResultExchange 
        exchangeInput={this.state.exchangeInput} 
        exchangeRate={this.state.exchangeRateGBP[this.state.selectValueFirst]} />
        case '3':
        return <ResultExchange 
        exchangeInput={this.state.exchangeInput} 
        exchangeRate={this.state.exchangeRateBYN[this.state.selectValueFirst]} />
        default:
        return <p>Result of Exchange:</p>
    }
  }

  clearData = () => {
    this.setState({
      exchangeRateUSD: [], 
      exchangeRateEUR: [], 
      exchangeRateGBP: [], 
      exchangeRateBYN: [],
    })
  }
  // refreshData = () => {
  //   const proxyurl = 'https://cors-anywhere.herokuapp.com/'
  //   const url = 'https://currate.ru/api/?get=rates&pairs=EURUSD,GBPUSD,BYNUSD,USDEUR,GBPEUR,BYNEUR,USDGBP,EURGBP,BYNGBP,USDBYN,EURBYN,GBPBYN&key=8b4b1e10cec2d44ab790b345b3222e04'
  //   fetch(proxyurl + url) 
  //     .then (response => response.json())
  //     .then (result => {
  //       this.setState(prevState => ({
  //         exchangeRateUSD: [...prevState.exchangeRateUSD, 1, result.data.EURUSD, result.data.GBPUSD, result.data.BYNUSD],
  //         exchangeRateEUR: [...prevState.exchangeRateEUR, result.data.USDEUR, 1, result.data.GBPEUR, result.data.BYNEUR],
  //         exchangeRateGBP: [...prevState.exchangeRateGBP, result.data.USDGBP, result.data.EURGBP, 1, 0.39],
  //         exchangeRateBYN: [...prevState.exchangeRateBYN, result.data.USDBYN, result.data.EURBYN, 2.67, 1],
  //       })
  //     )})
  //     .catch (() => console.log ('Can’t access ' + url + ' response. Blocked by browser?'))
  // }
  // resultData = () => {
  //   this.clearData()
  //   this.refreshData()
  // }
tryMe = (result) => {
        this.setState(prevState => ({
          exchangeRateUSD: [...prevState.exchangeRateUSD, 1, result.data.EURUSD, result.data.GBPUSD, result.data.BYNUSD],
          exchangeRateEUR: [...prevState.exchangeRateEUR, result.data.USDEUR, 1, result.data.GBPEUR, result.data.BYNEUR],
          exchangeRateGBP: [...prevState.exchangeRateGBP, result.data.USDGBP, result.data.EURGBP, 1, 0.39],
          exchangeRateBYN: [...prevState.exchangeRateBYN, result.data.USDBYN, result.data.EURBYN, 2.67, 1],
        })
      )
    }
  menu = () => 
    (
      <DataEx 
      exchangeInput={this.state.exchangeInput} 
      handleChangeMoney={(event) => this.handleChangeMoney(event)} 
      selectValueFirst={this.state.selectValueFirst} 
      selectValueSecond={this.state.selectValueSecond} 
      handleChangeFirstSelect={(event) => this.handleChangeFirstSelect(event)} 
      handleChangeSecondSelect={(event) => this.handleChangeSecondSelect(event)}
      />
    )

  currencyRate = () =>
    (
      <CurrencyRate secondValue={this.state.selectValueSecond} />
    )
  // refreshButton = () =>
  //   (
  //     <button onClick={() => this.resultData()}>
  //       Обновить курс
  //     </button>
  //   )  
  tryAll = () => 
    (
      <GetData tryMe={this.tryMe()} clearData={this.clearData()} />
    )
  
  render() { 
    return (
      <div>
        {this.menu()}
        {this.exchangeCondition()}
          <br />
        {this.currencyRate()}
        {this.tryAll()}
      </div>
    )
  }
}


export default App;