import React from 'react';

export default function Title({ name, title }) {
	return (
		<div className="row mx-auto">
			<div className="col-10 mx-auto my-2 text-center text-title">
				<h1 className="text-capitalize font-weight-bold">
					<strong>
						<i className="fas fa-cart-plus" />
					</strong>{' '}
					{name} <strong style={{ color: 'var(--mainYellow)' }}>{title}</strong>
				</h1>
			</div>
		</div>
	);
}
