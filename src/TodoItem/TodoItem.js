import React from 'react'
import './TodoItem.css'
import Button from '@material-ui/core/Button';
import { Checkbox } from '@material-ui/core';

export default function TodoItem(props) {
    const handleDeleteButtonClick = () => {
        props.handleDeleteClick(props.id)
    }

    const handleCompleteButtonClick = () => {
        props.handleCompleteClick(props.id);
    }
    const itemClass = "item-" + (props.complete ? "complete" : "incomplete");
    const displayClass = 'item-' + (props.display ? "display" : "inDisplay")
    return (
        <div className={displayClass}>
            <Checkbox onChange={handleCompleteButtonClick}></Checkbox>
            <span className={itemClass}>{props.value}</span>
            <span className="removeItemButton"><Button onClick={handleDeleteButtonClick} variant="text" color="secondary" >x</Button></span>
        </div >);
};
