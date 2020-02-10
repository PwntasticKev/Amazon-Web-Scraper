import React, { Component } from 'react';
import '../css/Header.scss'

class HeaderComponent extends React.Component {

	state = {
		toggleDiv: true
	}

//functions will always go above the render
clickButton() {
	this.setState({
		toggleDiv: !this.state.toggleDiv
	},_ => console.log(this.state))
}
otherButton(){
	console.log('you clicked me!')
}
	render() {
		return (
			<div className="main-header-container">
				<div style={{display: this.state.toggleDiv ? "block" : "none"}}><img src="" alt="No logo" className="image-container"/></div>
				<section>
					<ul className="header-menu">
						<li>My Profile</li>
						<li>Sign Up</li>
						<li>Log in</li>
						<li>My Listings</li>
						<button className="" onClick={ () => this.clickButton() }>Click me </button>
						<button className='' onClick={ () => this.otherButton() }>click me</button>
					</ul>
				</section>
			</div>
		)
	}
}

   export default HeaderComponent;