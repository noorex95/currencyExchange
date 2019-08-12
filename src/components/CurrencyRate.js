import React, { Component } from 'react';

class CurrencyRate extends Component {
	state = {
		EurInfo: [
			{currency: 'USD', rate: 1.14, id: 1}, 
			{currency: 'GBP', rate: 0.89, id: 2}, 
			{currency: 'BYN', rate: 2.34, id: 3},
		],
		UsdInfo: [
			{currency: 'EUR', rate: 0.88, id: 1}, 
			{currency: 'GBP', rate: 0.79, id: 2}, 
			{currency: 'BYN', rate: 2.05, id: 3},
		],
		GbpInfo: [
			{currency: 'USD', rate: 1.27, id: 1}, 
			{currency: 'EUR', rate: 1.12, id: 2}, 
			{currency: 'BYN', rate: 2.67, id: 3},
		],
		BynInfo: [
			{currency: 'USD', rate: 0.49, id: 1}, 
			{currency: 'EUR', rate: 0.43, id: 2}, 
			{currency: 'GBP', rate: 0.39, id: 3},
		]
	}

	headlineUsd = () => {
		return <p>Price for 1 USD</p>
	}
	headlineEur = () => {
		return <p>Price for 1 EUR</p>
	}
	headlineGbp = () => {
		return <p>Price for 1 GBP</p>
	}
	headlineByn = () => {
		return <p>Price for 1 BYN</p>
	}

	tableRateUsd = () => 
		this.state.UsdInfo.map(item => {
			return (
				<div>
					<table>
						<tbody>
							<tr key={item.id}>
								<td>{item.currency}</td>
								<td>{item.rate}</td>
							</tr>
						</tbody>
					</table>
				</div>
			)
		})
	tableRateEur = () => 
		this.state.EurInfo.map(item => {
			return (
				<div>
					<table>
						<tbody>
							<tr>
								<td>{item.currency}</td>
								<td>{item.rate}</td>
							</tr>
						</tbody>
					</table>
				</div>
			)
		})
	tableRateGbp = () => 
		this.state.GbpInfo.map(item => {
			return (
				<div>
					<table>
						<tbody>
							<tr>
								<td>{item.currency}</td>
								<td>{item.rate}</td>
							</tr>
						</tbody>
					</table>
				</div>
			)
		})
	tableRateByn = () => 
		this.state.BynInfo.map(item => {
			return (
				<div>
					<table>
						<tbody>
							<tr>
								<td>{item.currency} </td>
								<td>{item.rate}</td>
							</tr>
						</tbody>
					</table>
				</div>
			)
		})

	headlineTable = () => {
		switch (this.props.secondValue) {
			case '0':
			return this.headlineUsd()
			case '1':
			return this.headlineEur()
			case '2':
			return this.headlineGbp()
			case '3':
			return this.headlineByn()
			default:
        	return <p>Sorry, but service not working!</p>
		}
	}
	tableRate = () => {
		switch (this.props.secondValue) {
			case '0':
			return this.tableRateUsd()
			case '1': 
			return this.tableRateEur()
			case '2': 
			return this.tableRateGbp()
			case '3': 
			return this.tableRateByn()
			default:
        	return <p>Sorry, but service not working!</p>
		}
	}

	render() {
		return (
			<div>
				<span><p>CurrencyRate</p></span>
				{this.headlineTable()}
				{this.tableRate()}
			</div>
		)
	}
}


export default CurrencyRate;