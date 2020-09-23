import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Axios from 'axios';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=20')
      .then(res => this.setState({
        todos : res.data
      }))
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
    // this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({
        todos : [...this.state.todos.filter(todo => todo.id !== id)]
      }));
  }

  // add todo
  addTodo = (title) => {
    const newTodo = {title, completed: false}
    Axios.post('https://jsonplaceholder.typicode.com/todos', newTodo)
      .then(res => this.setState({
        todos : [...this.state.todos, res.data]
      }))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <br></br>
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <br></br>
                <Todos todos={this.state.todos} delTodo={this.delTodo} markComplete={this.markComplete}/>
              </React.Fragment>
            )}/>
            <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
