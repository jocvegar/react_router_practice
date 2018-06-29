import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import './Assets/css/default.min.css';

import Header from './components/header'
import Footer from './components/footer'
import Homepage from './components/homePage'
import Product from './components/productPage'

class App extends Component {
  render() {
    return (
    	<BrowserRouter>
	      <div className="App">
	     		<Header />
					<Route exact path="/" component={Homepage} />
					<Route exact path="/products" component={Product} />
	     		<Footer />
	      </div>
	    </BrowserRouter>
    );
  }
}

export default App;
