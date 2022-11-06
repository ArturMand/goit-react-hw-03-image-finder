import React, { Component } from 'react';
import ImageGallary from './ImageGallery/ImageGallary';
import SearchBar from './SearchBar/SearchBar';

export default class App extends Component {
  state = {
    query: '',
  };

  setQuery = query => {
    this.setState({ query });
  };

  render() {
    return (
      <>
        <SearchBar setQuery={this.setQuery} />
        <ImageGallary searchQuery={this.state.query} />
      </>
    );
  }
}
