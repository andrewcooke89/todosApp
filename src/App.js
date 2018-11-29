import React, { Component } from 'react';
import TodoItem from './components/TodoItem';
import classes from './app.module.css';
import todosData from './todosData';



class App extends Component {
  state = {
    todos: todosData
  }

  
  
  
  render() {


    const todoItems = this.state.todos.map(todo => {
      return (<TodoItem 
                key={todo.id}
                text={todo.text}
                completed={todo.completed}
              />)
    })
    return (
      <div className={classes.TodoList} >
          {todoItems}
      </div>
    );
  }
}

export default App;
