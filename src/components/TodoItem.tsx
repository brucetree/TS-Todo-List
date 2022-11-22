import React from "react";
import classes from "./TodoItem.module.css";
const TodoItem: React.FC<{text:string; onRemoveTodo:()=>void}>=(props)=>{
    //                     或者   (event:React.MouseEvent)=>void
    return(
    <li className={classes.item} onClick={props.onRemoveTodo}>{props.text}</li>
    )
}

export default TodoItem;