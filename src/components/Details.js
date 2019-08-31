import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer, ButtonBackTo } from './Button';

export default class Details extends Component {
	render() {
		return (
			<ProductConsumer>
				{(value) => {
					const { id, company, img, info, price, title, inCart } = value.detailProduct;

					return (
						<div className="container py-5">
							{/* <div className="row">
								<div className="col-10 mx-auto text-center text-slanted text-blue my-5">
									<h1>{title}</h1>
									<hr />
								</div>
                    </div> */}
							<div className="row">
								<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
									<img src={img} className="img-fluid" alt="product" />
								</div>

								<div
									className="col-10 mx-auto col-md-6 my-3 text-capitalize"
									style={{
										border: '1px solid rgba(9,9,9,0.1)',
										padding: '50px',
										borderRadius: '25px'
									}}
								>
									<h2>model : {title}</h2>
									<h4
										style={{ background: 'none' }}
										className="text-title text-upppercase text-muted mt-3 mb-2"
									>
										by : <span className="text-uppercase">{company}</span>
									</h4>

									<h4>
										<strong>
											price : <span style={{ color: 'var(--mainYellow)' }}>${price}</span>
										</strong>
									</h4>
									<p className="text-capitalize font-weight-bold mt-3 mb-0">about product:</p>
									<p className="text-muted">{info}</p>
									<div
										className="card-footer d-flex justify-content-between"
										style={{ padding: '20px 0 0', background: 'var(--mainWhite)' }}
									>
										<Link to="/">
											<ButtonBackTo>back</ButtonBackTo>
										</Link>

										<ButtonContainer
											cart
											disabled={inCart ? true : false}
											onClick={() => {
												value.addToCart(id);
												value.openModal(id);
											}}
										>
											{inCart ? 'inCart' : 'add to cart'}
										</ButtonContainer>
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</ProductConsumer>
		);
	}
}
