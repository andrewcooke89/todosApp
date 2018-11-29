import React from 'react'
import classes from '../todoItem.module.css';



const TodoItem = () => {
    return (
        <div className={classes.TodoItem} >
            <input  type="checkbox"/> 
            <p>placeholder text</p>
        </div>
    );
}

export default TodoItem;