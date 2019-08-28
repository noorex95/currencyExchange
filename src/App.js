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
  refreshState = (result) => {
        this.setState(prevState => ({
          exchangeRateUSD: [...prevState.exchangeRateUSD, 1, result.data.EURUSD, result.data.GBPUSD, result.data.BYNUSD],
          exchangeRateEUR: [...prevState.exchangeRateEUR, result.data.USDEUR, 1, result.data.GBPEUR, result.data.BYNEUR],
          exchangeRateGBP: [...prevState.exchangeRateGBP, result.data.USDGBP, result.data.EURGBP, 1, result.data.BYNGBP],
          exchangeRateBYN: [...prevState.exchangeRateBYN, result.data.USDBYN, result.data.EURBYN, result.data.GBPBYN, 1],
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
      <CurrencyRate
      firstValue={this.state.selectValueFirst}
      USDEUR={this.state.exchangeRateEUR[0]}
      USDGBP={this.state.exchangeRateGBP[0]}
      USDBYN={this.state.exchangeRateBYN[0]}
      EURUSD={this.state.exchangeRateUSD[1]}
      EURGBP={this.state.exchangeRateGBP[1]}
      EURBYN={this.state.exchangeRateBYN[1]}
      GBPUSD={this.state.exchangeRateUSD[2]}
      GBPEUR={this.state.exchangeRateEUR[2]}
      GBPBYN={this.state.exchangeRateBYN[2]}
      BYNUSD={this.state.exchangeRateUSD[3]}
      BYNEUR={this.state.exchangeRateEUR[3]}
      BYNGBP={this.state.exchangeRateGBP[3]}
      />
    )
  clickToRefresh = () =>
    (
      <GetData refreshState={this.refreshState} clearData={this.clearData} />
    )

  render = () =>
    (
      <div>
        {this.menu()}
        {this.exchangeCondition()}
          <br />
        {this.currencyRate()}
        {this.clickToRefresh()}
      </div>
    )
}


export default App;
