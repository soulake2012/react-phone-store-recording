import React, { Component } from 'react';

export default class Default extends Component {
	render() {
		console.log('default:>>> ', this.props);
		return (
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto text-center text-title-uppercase pt-5">
						<h1 className="display-3">error: 404</h1>
						<h2>page not found</h2>
						<h3>
							URL <span className="text-danger">"{this.props.location.pathname}"</span> was not found
						</h3>
					</div>
				</div>
			</div>
		);
	}
}
