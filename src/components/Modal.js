import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { ButtonContainer, ButtonBackTo } from './Button';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
	render() {
		return (
			<ProductConsumer>
				{(value) => {
					const { modalOpen, closeModal } = value;
					const { img, title, price } = value.modalProduct;

					if (!modalOpen) {
						return null;
					} else {
						return (
							<ModalContainer>
								<div className="container">
									<div className="row">
										<div
											id="modal"
											className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize"
										>
											<h5>item add to the cart.</h5>
											<img src={img} className="img-fluid" alt="product" />
											<h5>{title}</h5>
											<h5 className="text-muted">price : $ {price}</h5>
											<Link to="/">
												<ButtonBackTo onClick={() => closeModal()}>back</ButtonBackTo>
											</Link>
											<Link to="/cart">
												<ButtonContainer onClick={() => closeModal()}>
													go to cart
												</ButtonContainer>
											</Link>
										</div>
									</div>
								</div>
							</ModalContainer>
						);
					}
				}}
			</ProductConsumer>
		);
	}
}

const ModalContainer = styled.div`
	z-index: 2;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	//filter: blur(5px);
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	#modal {
		padding: 15px;
		border-radius: 25px;
		border: 1px solid var(--mainGray);
		color: var(--middleGray);
		background: var(--mainWhite);
	}
`;
