import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import ToDoList from './components/ToDoList';
import AddTodo from './components/AddTodo';
import about from './components/pages/about';
import {v4 as uuidv4} from 'uuid';
/*import axios from 'axios'; */

import './App.css';


class App extends Component {
  state = {
    todos: []
  }
  
 /* componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos: res.data}))
  }
  */
  
  //Toggle complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {

      if (todo.id === id){
        todo.completed= !todo.completed
      }
      return todo;
    
    })});
  }

  //Delete Todo
  delTodo = (id) => {
   /* axios.delete (`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !==id) ]}));
   */ this.setState({todos: [...this.state.todos.filter(todo => todo.id !==id) ]});
  }

  //Add Todo
  AddTodo = (title) => {
  /*  axios.post('https://jsonplaceholder.typicode.com/todos',{
      title,
      completed: false
    })
      .then(res => this.setState({todos: [...this.state.todos, res.data]}));
  */
    const newTodo = {
    id: uuidv4(),
    title,
    completed: false
  }
  this.setState({todos: [...this.state.todos, newTodo]});
  }

  render(){
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
              <Route exact path = "/" render= {props => (
                <React.Fragment>
                  <AddTodo AddTodo={this.AddTodo}/>
                  <ToDoList todos = {this.state.todos} markComplete = {this.markComplete} delTodo ={this.delTodo}/>
                </React.Fragment>
              )}/> 
            <Route path="/about" component={about}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;