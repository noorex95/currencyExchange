import React, { Component } from 'react';

class CurrencyRate extends Component {





	render() {

		const EurInfo = [{currency: 'USD', rate: 1.14, id: 1}, {currency: 'GBP', rate: 0.89, id: 2}, {currency: 'BYN', rate: 2.34, id: 3}]
		const UsdInfo = [{currency: 'EUR', rate: 0.88, id: 1}, {currency: 'GBP', rate: 0.79, id: 2}, {currency: 'BYN', rate: 2.05, id: 3}]
		const GbpInfo = [{currency: 'USD', rate: 1.27, id: 1}, {currency: 'EUR', rate: 1.12, id: 2}, {currency: 'BYN', rate: 2.67, id: 3}]
		const BynInfo = [{currency: 'USD', rate: 0.49, id: 1}, {currency: 'EUR', rate: 0.43, id: 2}, {currency: 'GBP', rate: 0.39, id: 3}]

		let showTableRate 
		let currencyName //headline for table


		if (this.props.secondValue === '0') {
			currencyName = ' Price for 1 USD'

			showTableRate = UsdInfo.map(item => {
				return (
					<tr key={item.id}>
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
				<span><p>CurrencyRate</p></span>
				<span><p>{currencyName}</p></span>
					<table>
						<tbody>
							{showTableRate}
						</tbody>
					</table>
					<br />

			</div>
		)
	}
}


export default CurrencyRate;