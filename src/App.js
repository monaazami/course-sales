import React, { Component } from 'react';
import logo from './logo.svg';
import Coursesales from "./course-sales.js";
import './App.css';

class App extends Component {
  render() {
    var courses =[
      {name:"Graphic design" ,price:49},
      {name:"Web design" ,price:60},
      {name:"Illustration" ,price:35},
      {name:"Photography" ,price:65}
    ]
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Course sales React app!</h1>
        </header>
        
        <Coursesales items={courses}/>
      </div>
    );
  }
}

export default App;
