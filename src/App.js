import React, { Component } from 'react';
import './App.css';
import VistaAlbums from './VistaAlbums';
import Header from './Header';
import CardView from './CardView';
import Fin from './Fin'; 

class App extends Component {
	
  render() {
    return (
      <div className="App">
      	<Header />
      	<VistaAlbums />
      	<CardView />
        <Fin />
      </div>
    );
  }
}

export default App;
