import React from 'react'

export default function TodoInput({ handleInputChange, input, handleInputClick, handleFilterFinished, handleFilterNone }) {
    return (<div>
        <input type='text' onChange={handleInputChange} value={input}></input>
        <button type='button' onClick={handleInputClick}>add an item</button>
        <button type='button' onClick={handleFilterFinished}>show unfinished item</button>
        <button type='button' onClick={handleFilterNone}>show all item</button>
    </div>);
};
