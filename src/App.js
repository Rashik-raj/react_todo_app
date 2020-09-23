import React, { Component } from 'react';
import Header from './components/layout/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false,
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: true,
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false,
      }
    ]
  }
  
  // toggle complete 
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })});
  }

  // delete todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  // add todo
  addTodo = (title) => {
    const newTodo = {id: 5, title, completed: false}
    this.setState({ todos: [...this.state.todos, newTodo]});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <br></br>
          <AddTodo addTodo={this.addTodo}/>
          <br></br>
          <Todos todos={this.state.todos} delTodo={this.delTodo} markComplete={this.markComplete}/>
        </div>
      </div>
    );
  }
}

export default App;
