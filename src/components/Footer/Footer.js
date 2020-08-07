import React, { Component } from "react";
class Footer extends Component {
	render() {
		return (
			<div className="row" id="footer">
				<div className="medium-12 columns">
					<p>
						Copyright 2020 ,{" "}
						<a href="https://shariyarabeer.github.io/demoapp/?fbclid=IwAR31TMmjhxPq0Kt6hn48zqS7pYoh-Qf2V01ijHdfHa-Pl3GxvF1j84escPg#/react-auth-ui/">
							{" "}
							Shariyar Abeer
						</a>
					</p>
				</div>
			</div>
		);
	}
}
export default Footer;
