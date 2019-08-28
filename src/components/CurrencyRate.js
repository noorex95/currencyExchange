import React, { Component } from 'react';

class CurrencyRate extends Component {
	state = {
		EurInfo: [
			{currency: 'USD', rate: this.props.EURUSD, id: 1},
			{currency: 'GBP', rate: this.props.EURGBP, id: 2},
			{currency: 'BYN', rate: this.props.EURBYN, id: 3},
		],
		UsdInfo: [
			{currency: 'EUR', rate: this.props.USDEUR, id: 1},
			{currency: 'GBP', rate: this.props.USDGBP, id: 2},
			{currency: 'BYN', rate: this.props.USDBYN, id: 3},
		],
		GbpInfo: [
			{currency: 'USD', rate: this.props.GBPUSD, id: 1},
			{currency: 'EUR', rate: this.props.GBPEUR, id: 2},
			{currency: 'BYN', rate: this.props.GBPBYN, id: 3},
		],
		BynInfo: [
			{currency: 'USD', rate: this.props.BYNUSD, id: 1},
			{currency: 'EUR', rate: this.props.BYNEUR, id: 2},
			{currency: 'GBP', rate: this.props.BYNGBP, id: 3},
		]
	}

	headlineUsd = () =>
	(
		<p>Price for 1 USD</p>
	)
	headlineEur = () =>
	(
		<p>Price for 1 EUR</p>
	)
	headlineGbp = () =>
	(
		<p>Price for 1 GBP</p>
	)
	headlineByn = () =>
	(
		<p>Price for 1 BYN</p>
	)

	tableRateUsd = () =>
		this.state.UsdInfo.map(item =>
			(
				<div key={item.id}>
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
		)
	tableRateEur = () =>
		this.state.EurInfo.map(item =>
			(
				<div key={item.id}>
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
		)
	tableRateGbp = () =>
		this.state.GbpInfo.map(item =>
			(
				<div key={item.id}>
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
		)
	tableRateByn = () =>
		this.state.BynInfo.map(item =>
			(
				<div key={item.id}>
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
		)

	headlineTable = () => {
		switch (this.props.firstValue) {
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
		switch (this.props.firstValue) {
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

	render = () =>
		(
			<div>
				<span><p>CurrencyRate</p></span>
				{this.headlineTable()}
				{this.tableRate()}
			</div>
		)
}


export default CurrencyRate;
