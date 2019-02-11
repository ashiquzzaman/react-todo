import React, {
	Component
} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export class TodoList extends Component {
	renderListItems() {
		return this.props.todoList.map((todo) => ( 
		<TodoItem key = {todo.id} todo = {todo} makeComplete = {this.props.makeComplete}  delTodo={this.props.delTodo} />
		));
	}
	render() {
		return <ul > {this.renderListItems()} </ul>;
	}
}
TodoList.propTypes = {
	todoList: PropTypes.array.isRequired,
	markComplete: PropTypes.func.isRequired,
	delTodo: PropTypes.func.isRequired,
};
export default TodoList;