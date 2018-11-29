import React from 'react'
import classes from '../todoItem.module.css';



const TodoItem = (props) => {

   
    return (
        <div className={classes.TodoItem} >
            <input 
                style={{display: 'inline', marginTop: '40px'}} 
                checked={props.completed} type="checkbox"
                onChange={() => props.handleChange(props.id)}
                /> 
            <p style={{display: 'inline'}}>{props.text}</p>
        </div>
    );
}

export default TodoItem;