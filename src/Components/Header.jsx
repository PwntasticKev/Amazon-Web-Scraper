import React, { Component } from 'react';
import '../css/Header.scss'

class HeaderComponent extends React.Component {

	state = {
		toggleDiv: true
	}

//functions will always go above the render
clickButton() {
	// when the button is clicked this function will run
	this.setState({
		//we are changignt eh state of the state object on line 6. and setting it to be the oposite of what it currently is. 
		toggleDiv: !this.state.toggleDiv
		//consoling loggin the changes once its done. 
	},_ => console.log(this.state))
}
	render() {
		return (
			<div className="main-header-container">
				<div style={{display: this.state.toggleDiv ? "block" : "none"}}><img src="" alt="No logo" className="image-container"/></div>
				<section>
					<ul className="header-menu">
						<li>My Profile</li>
						<li>Hey im testing this out</li>
						<li>hey im adding something</li>
						<li>Sign Up</li>
						<li>Log in</li>
						<li>My Listings</li>
						<button className="" onClick={ () => this.clickButton() }>Click me </button>
					</ul>
				</section>
			</div>
		)
	}
}

   export default HeaderComponent;