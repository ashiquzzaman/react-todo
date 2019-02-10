import React, { Component } from 'react';
import './App.css';
import TodoList from './Components/Todo/TodoList';
import Header from './Components/Layout/Header';
import data from './DB/data.json';

class App extends Component {
	state = {
		title: 'ToDo List',
		todoList: data.todoList
	};
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
	render() {
		return (
			<div className="App">
		     <Header title={this.state.title}/>
				<section>				
						<TodoList todoList={this.state.todoList} makeComplete={this.makeComplete} />				
				</section>
			</div>
		);
	}
}

export default App;
