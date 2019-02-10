import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
	getStyle = () => {
		return {
			textDecoration: this.props.todo.completed ? 'line-through' : 'none'
		};
	};

	render() {
		const { id, title } = this.props.todo;

		return (
			<li className="list-item">
				<label htmlFor={'todo-item-' + id} style={this.getStyle()}>
					<input type="checkbox" onChange={this.props.makeComplete.bind(this, id)} id={'todo-item-' + id} />
					{title}
				</label>
			</li>
		);
	}
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired
};

export default TodoItem;
