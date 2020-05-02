import React from 'react'

export default function TodoInput({ handleInputChange, input, handleInputClick }) {
    return (<div>
        <input type='text' onChange={handleInputChange} value={input}></input>
        <button type='button' onClick={handleInputClick}>add an item</button>
    </div>);
};
