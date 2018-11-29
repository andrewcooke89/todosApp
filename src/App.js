import React, { Component } from 'react';
import TodoItem from './components/TodoItem';
import classes from './app.module.css';


class App extends Component {
  render() {
    return (
      <div className={classes.TodoList} >
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
      </div>
    );
  }
}

export default App;
