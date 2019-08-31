import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotals from './CartTotals';

import { ProductConsumer } from '../../context';

export default class Cart extends Component {
	render() {
		const table = {
			border: '1px solid #999',
			margin: '15px',
			background: '#fff',
			borderRadius: '10px',
			overflow: 'auto'
		};
		return (
			<section>
				<ProductConsumer>
					{(value) => {
						const { cart } = value;
						if (cart.length > 0) {
							return (
								<React.Fragment>
									<Title name="your" title="cart" />
									<div className="tableCart" style={table}>
										<CartColumns />
										<CartList value={value} />
										<hr />
										<CartTotals value={value} />
									</div>
								</React.Fragment>
							);
						} else {
							return <EmptyCart />;
						}
					}}
				</ProductConsumer>
			</section>
		);
	}
}
