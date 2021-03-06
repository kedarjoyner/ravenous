import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Bordertown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

const businesses = [
  business,
  business,
  business,
  business,
  business,
  business
];


class App extends Component {
  // Parameters represent 3 pieces of info sent to Yelp API
  searchYelp(term, location, sortBy){
    console.log(`Searching yelp with ${term}, ${location}, ${sortBy}`);
  }
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        {/* Set searchYelp property to SearchBar */}
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={businesses}/>
      </div>
    );
  }
}

export default App;
