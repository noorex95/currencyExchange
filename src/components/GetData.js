import React, { Component } from 'react';

class GetData extends Component {

  refreshData = () => {
    const proxyurl = 'https://cors-anywhere.herokuapp.com/'
    const url = 'https://currate.ru/api/?get=rates&pairs=EURUSD,GBPUSD,BYNUSD,USDEUR,GBPEUR,BYNEUR,USDGBP,EURGBP,BYNGBP,USDBYN,EURBYN,GBPBYN&key=8b4b1e10cec2d44ab790b345b3222e04'
    fetch(proxyurl + url, {
      method: 'POST',
      body: JSON.stringify({
      username: 'noorex',
      email: 'noorex87@mail.ru',
      userId: 1
    }),
    headers: {"Content-Type": "application/json; charset=utf-8"}
  })
      .then(response => response.json())
      .then(result => this.props.refreshState(result))
      .catch (() => console.log ('Can’t access ' + url + ' response. Blocked by browser?'))
  }
  resultData = () => {
    this.props.clearData()
    this.refreshData()
  }

  render = () =>
	(
		<div>
			<button onClick={() => this.resultData()}>Обновить курс</button>
		</div>
	)
}

export default GetData;
