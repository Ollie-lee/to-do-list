import React from 'react'
import './TodoItem.css'

export default function TodoItem(props) {
    const handleDeleteButtonClick = () => {
        props.handleDeleteClick(props.id)
    }

    const handleCompleteButtonClick = () => {
        props.handleCompleteClick(props.id);
    }
    const itemClass = "item-" + (props.complete ? "complete" : "incomplete") ;
    const displayClass = 'item-' + (props.display ? "display" : "inDisplay")
    return (
        <div className={displayClass}>
            <input type="checkbox" onChange={handleCompleteButtonClick}></input>
            {console.log(props.complete)}
            <span className={itemClass}>{props.value}</span>
            <span onClick={handleDeleteButtonClick}>x</span>
        </div>);
};
