import React from 'react';
import { Link } from 'react-router-dom';
import PayPalButton from './PayPalButton';

export default function CartTotals({ value, history }) {
	const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
	return (
		<React.Fragment>
			<div className="container" style={{ margin: '0 30px 30px 0', float: 'right' }}>
				<div className="row">
					<div className="col-10 mt-2 ml-sm-6 ml-md-auto  text-capitalize text-right">
						<Link to="/">
							<button
								className="btn btn-outline-danger text-uppercase mb-3 px-5"
								type="button"
								onClick={() => clearCart()}
							>
								clear cart
							</button>
						</Link>

						<h5 className="container">
							<span className="text-none-background ml-md-auto col-md-8 col-sm-8 tatal-margin">
								subtotal :
							</span>
							<strong style={txtAlight} className="col-md-2 col-sm-4">
								$ {cartSubTotal}
							</strong>
						</h5>

						<h5 className="container">
							<span className="text-none-background ml-md-auto col-md-8 col-sm-8 tatal-margin">
								tax :
							</span>
							<strong style={txtAlight} className="col-md-2 col-sm-4">
								$ {cartTax}
							</strong>
						</h5>

						<h5 className="container">
							<div className="row col-12"></div>
							<span className="text-none-background tatal-margin col-md-5 col-sm-5 col-xs">
								<i style={{ color: 'var(--mainYellow)' }} className="fas fa-cart-plus" /> total :
							</span>
							<strong style={txtAlight} className="col-md-4 col-sm-4 col-xs">
								$ {cartTotal}
							</strong>
						</h5>

						<PayPalButton total={cartTotal} clearCart={clearCart} history={history} />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

const txtAlight = {
	textAlign: 'left',
	// background: 'var(--mainYellow)',
	// border: '1px solid var(--mainYellow)',
	// borderRadius: '25px',
	marginRight: '0'
};
