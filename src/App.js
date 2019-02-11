import React, { Component } from 'react';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Layout/Header';
import TodoList from './Components/Todo/TodoList';
import AddTodo from './Components/Todo/AddTodo';
import data from './DB/data.json';

class App extends Component {
	state = {
		title: 'ToDo List',
		todoList: data.todoList
	};
	  // Toggle Complete

	makeComplete = (id) => {
		this.setState({
			todoList: this.state.todoList.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		});
	};

  // Delete Todo
  delTodo = (id) => {
	this.setState({
		todoList: this.state.todoList.filter((todo) => {
			// if (todo.id !== id) {
			// 	return todo;
			// }		
			return todo.id !== id;				
		})
	});
  }
  addTodo = (title) => {
	this.setState({ todoList: [...this.state.todoList,
		 {
		id:4,
		title:title,
		completed: false
	  }] 
	});
  }

	render() {
		return (
			<div className="App">
		     <Header title={this.state.title}/>
				<section>
			    	<AddTodo addTodo={this.addTodo} />			
						<TodoList todoList={this.state.todoList} makeComplete={this.makeComplete}  delTodo={this.delTodo} />				
				</section>
			</div>
		);
	}
}

export default App;
