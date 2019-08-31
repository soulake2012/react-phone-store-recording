import React from 'react';

export default function EmptyCart() {
	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-10 mx-auto text-center text-uppercase">
					<h1 style={colorText}>~your cart is currently empty.~</h1>
				</div>
			</div>
		</div>
	);
}

const colorText = {
	color: '#f1f1f1',
	textShadow: '0 0 5px #333',
};
