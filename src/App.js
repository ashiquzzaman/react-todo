import React, { Component } from 'react';
import './App.css';
import Todos from './Components/Todos'; 
import data from './DB/data.json';


class App extends Component {

  state={
      title:"ToDo List"
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">   
        <h1> {this.state.title} </h1>    
        </header>
        <section>
          <Todos todos={data.todos}/>
        </section>
      </div>
    );
  }
}

export default App;
