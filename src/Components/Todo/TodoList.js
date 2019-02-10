import React, {
	Component
} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export class TodoList extends Component {
	renderListItems() {
		return this.props.todoList.map((todo) => ( 
		<TodoItem key = {todo.id} todo = {todo} makeComplete = {this.props.makeComplete}/>
		));
	}
	render() {
		return <ul > {this.renderListItems()} </ul>;
	}
}
TodoList.propTypes = {
	todoList: PropTypes.array.isRequired
};
export default TodoList;