import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import PropTypes from 'prop-types';

    class ToDoList extends Component {      
      
        render(){
          return this.props.todos.map((todo) => (
            <ToDoItem key= {todo.id} todo={todo} 
            markComplete ={this.props.markComplete}
            delTodo={this.props.delTodo}/>
          ));
        }
      }
      
  //PropTypes
    ToDoList.propTypes = {
      todos: PropTypes.array.isRequired,
      markComplete: PropTypes.func.isRequired,
      delTodo: PropTypes.func.isRequired,
      }
      
export default ToDoList;