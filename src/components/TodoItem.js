import React from 'react'
import classes from '../todoItem.module.css';



const TodoItem = () => {
    return (
        <div className={classes.TodoItem} >
            <input style={{display: 'inline', marginTop: '40px'}} type="checkbox"/> 
            <p style={{display: 'inline'}}>placeholder text</p>
        </div>
    );
}

export default TodoItem;