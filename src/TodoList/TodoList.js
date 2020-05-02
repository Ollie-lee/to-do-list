import React from 'react'
import TodoItem from '../TodoItem/TodoItem'

export default function TodoList({ itemList, input }) {

    return (<div>
        {itemList.map((item) => {
            return <div>
                <TodoItem {...item} input={input} />
            </div>
        })}
    </div>)
}