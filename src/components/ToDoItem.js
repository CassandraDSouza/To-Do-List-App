import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ToDoItem extends Component {
    getStyle = () =>{
        return {
            background: '#FFC0CB',
            padding: '10px',
            borderBottom: '3px #FF69B4 dotted',
            borderRight: '3px #FF69B4 dotted',
            borderLeft: '3px #FF69B4 dotted',
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'
        }

    }

   markComplete = (e) =>{
      console.log(this.props)
   }
   
   render() {
    const{ id, title} = this.props.todo;
    
    return (
        <div style = {this.getStyle()}>
            <p> 
               <input type= "checkbox" onChange = {this.props.markComplete.bind(this,id)} /> {' '} 
                {title} 
               <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle} >x</button>
            </p>
         </div>
        )
    }
}
 
//PropTypes
 ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}
      
const btnStyle = {
    background: '#FF1493',
    colour: '#fff',
    borderStyle: 'none',
    padding: '4px 9px',
    borderRadius: '40%',
    cursor: 'pointer',
    float: 'right'
}
export default ToDoItem
