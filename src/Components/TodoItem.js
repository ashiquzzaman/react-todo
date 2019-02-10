import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    
    getStyle=()=>{
        return {
        background:'#f4f4f4',
        textDecoration:this.props.todo.completed?"line-through":"none",

    }
}
     
  render() {
    const {id,title}=this.props.todo;

    return (
      <div id={'id-'+id} style={this.getStyle()}>
       <input type="checkbox"/>
        {title}
      </div>
    )
  }
}

TodoItem.propTypes={
    todo:PropTypes.object.isRequired
  }

export default TodoItem
