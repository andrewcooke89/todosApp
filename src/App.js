import React, { Component } from 'react';
import TodoItem from './components/TodoItem';
import classes from './app.module.css';
import todosData from './todosData';



class App extends Component {
  state = {
    todos: todosData
  }

  handleChange = (id) => {
      const copyState = {...this.state}
      const updatedState = copyState.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      })
    this.setState({todos: updatedState})
  }
  
  
  
  render() {

    const todoItems = this.state.todos.map(todo => {
      return (<TodoItem 
                key={todo.id}
                text={todo.text}
                completed={todo.completed}
                handleChange={this.handleChange}
                id={todo.id}
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
