import React, { Component } from 'react'
import Movies from './movies'
import './App.css'
import DisplayCarousel from '../components/Carousel'
import AddMovieModal from '../components/AddModal'
class App extends Component {
  render() {
    return (
      <div>
        <DisplayCarousel/>
        <AddMovieModal/>
        <Movies/>
      </div>
    );
  }
}

export default App;
