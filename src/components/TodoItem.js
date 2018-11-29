import React from 'react'
import classes from '../todoItem.module.css';



const TodoItem = (props) => {

    let styles;
    if(props.completed === true) {
        styles = {
            color: 'grey',
            textDecoration: 'line-through'
        }
    }
    return (
        <div className={classes.TodoItem} >
            <input 
                className={classes.InputStyle}
                checked={props.completed} type="checkbox"
                onChange={() => props.handleChange(props.id)}
                /> 
            <p style={styles}  className={classes.pStyle}>{props.text}</p>
        </div>
    );
}

export default TodoItem;