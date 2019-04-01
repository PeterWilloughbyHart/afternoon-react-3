import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.js';
import DataScroll from './components/DataScroll.js'

class App extends Component {
  constructor(prop) {
    super(prop)

    this.state = {
     data: data,
     id: 0
    }
    // this.nextUser = this.nextUser.bind(this); 
  }



 

  newInfo = () => {
    if (this.state.id < data.length - 1) {
      this.setState({
        id: this.state.id + 1});
    }
  }


  oldInfo = () => {
    if (this.state.id > 0) {
      this.setState({
        id: this.state.id - 1});
    }
  }

  

  
  render() {

    let first = this.state.data[this.state.id].name.first;
    let last = this.state.data[this.state.id].name.last;
    let city = this.state.data[this.state.id].city;
    let country = this.state.data[this.state.id].country;
    let employer = this.state.data[this.state.id].employer;
    let title = this.state.data[this.state.id].title;
    let favoriteMovies = this.state.data[this.state.id].favoriteMovies.map((element) => {
      console.log(element);
      return <li>{element}</li>
    });
    

    return (

      <div className="App">

        <header><h1>Home</h1></header>
        
        <div id='scrollbox'>
          <h2 id='scrollbox-number'>{this.state.id + 1}/{data.length}</h2>

          <h1><u>{`${first} ${last}`}</u></h1>

          <p><strong>{`${city}: `}</strong>{`${country}`}</p>
          <p><strong>{`${employer}: `}</strong>{`${title}`}</p>
          <h2>Favorite Movies:</h2>
          <ol>{favoriteMovies}</ol>
        </div>
            
           <DataScroll lastuser={this.oldInfo}
           newuser={this.newInfo}/>

      </div>
   )
  
  }
}

export default App;
