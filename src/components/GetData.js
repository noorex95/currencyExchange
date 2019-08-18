import React, { Component } from 'react';

class GetData extends Component {

  refreshData = () => {
    const proxyurl = 'https://cors-anywhere.herokuapp.com/'
    const url = 'https://currate.ru/api/?get=rates&pairs=EURUSD,GBPUSD,BYNUSD,USDEUR,GBPEUR,BYNEUR,USDGBP,EURGBP,BYNGBP,USDBYN,EURBYN,GBPBYN&key=8b4b1e10cec2d44ab790b345b3222e04'
    fetch(proxyurl + url) 
      .then (response => response.json())
      .then (result => {
   		this.props.tryMe()
       })
      .catch (() => console.log ('Can’t access ' + url + ' response. Blocked by browser?'))
  }
  resultData = () => {
    this.props.clearData()
    this.refreshData()
  }


	render() {

		return (
			<div>
				<button onClick={() => this.resultData()}>Обновить курс</button>
			</div>
		)
	}
}

export default GetData;
