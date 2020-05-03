import React from 'react'
import TodoItem from '../TodoItem/TodoItem'

export default function TodoList({ itemList, input, handleDeleteClick, handleCompleteClick }) {



    return (
        <div>
            {itemList.map((item) => {
                return <div>
                    <TodoItem {...item} input={input} handleCompleteClick={handleCompleteClick} handleDeleteClick={handleDeleteClick} />
                </div>
            })}
        </div>
    )
}