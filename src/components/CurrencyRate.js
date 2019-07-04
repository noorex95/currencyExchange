import React, { Component } from 'react';

class CurrencyRate extends Component {

	render() {

		const EurInfo = [{currency: 'USD', rate: 1.14}, {currency: 'GBP', rate: 0.89}, {currency: 'BYN', rate: 2.34}]
		const UsdInfo = [{currency: 'EUR', rate: 0.88}, {currency: 'GBP', rate: 0.79}, {currency: 'BYN', rate: 2.05}]
		const GbpInfo = [{currency: 'USD', rate: 1.27}, {currency: 'EUR', rate: 1.12}, {currency: 'BYN', rate: 2.67}]
		const BynInfo = [{currency: 'USD', rate: 0.49}, {currency: 'EUR', rate: 0.43}, {currency: 'GBP', rate: 0.39}]

		let showTableRate 
		let currencyName //headline for table


		if (this.props.secondValue === '0') {
			currencyName = ' Price for 1 USD'

			showTableRate = UsdInfo.map(item => {
				return (
					<tr>
						<td>{item.currency}</td>
						<td>{item.rate}</td>
					</tr>
				)
			})
		}

		else if (this.props.secondValue === '1') {
			currencyName = ' Price for 1 EUR'

			showTableRate = EurInfo.map(item => {
				return (
					<tr>
						<td>{item.currency}</td>
						<td>{item.rate}</td>
					</tr>
				)
			})
		}

		else if (this.props.secondValue === '2') {
			currencyName = ' Price for 1 GBP'

			showTableRate = GbpInfo.map(item => {
				return (
					<tr>
						<td>{item.currency}</td>
						<td>{item.rate}</td>
					</tr>
				)
			})
		}

		else if (this.props.secondValue === '3') {
			currencyName = ' Price for 1 BYN'

			showTableRate = BynInfo.map(item => {
				return (
					<tr>
						<td>{item.currency} </td>
						<td>{item.rate}</td>
					</tr>
				)
			})
		}//condition for show table with currency rate


		return (
			<div>
				<span><p>CurrencyRate: {currencyName}</p></span>
					<table>
						{showTableRate}
					</table>
					<br />
				<button>Обновить курс</button>
			</div>
		)
	}
}


export default CurrencyRate;