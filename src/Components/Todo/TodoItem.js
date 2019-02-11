import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
	getStyle = () => {
		return {		 
		  padding: '10px',		  
		  textDecoration: this.props.todo.completed ? 'line-through' : 'none'
		}
	  }
	render() {
		const { id, title } = this.props.todo;

		return (
			<li className="list-item">
				<label htmlFor={'todo-item-' + id} style={this.getStyle()}>
					<input type="checkbox" onChange={this.props.makeComplete.bind(this, id)} id={'todo-item-' + id} />
					{title}
				</label>
				<button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
			</li>
		);
	}
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired
};
const btnStyle = {
	background: '#ff0000',
	color: '#fff',
	border: 'none',
	padding: '5px 9px',
	borderRadius: '50%',
	cursor: 'pointer',
	float: 'right'
  }
export default TodoItem;
