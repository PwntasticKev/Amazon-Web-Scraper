
  
  import React, { Component } from 'react';
  import './App.css';
import ProductList from './Components/ProductList';
import Header from './Components/Header';


export default class App extends Component {
	
	
	writeUserData(userId, name, email, imageUrl) {
	  firebase.database().ref('users/' + userId).set({
		username: name,
		email: email,
		profile_picture : imageUrl
	  });
	}

render() {
    return (
		<div className="App">
		<Header/>
		<ProductList/>
		{/* <button onClick={_ => this.writeUserData()}>Click</button> */}
	</div> 
  );

}
}

