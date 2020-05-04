import React from 'react'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

export default function TodoInput({ handleInputChange, input, handleInputClick, handleFilterFinished, handleFilterNone }) {
    return (<div>
        <Input type='text' onChange={handleInputChange} value={input}></Input>
        <Button variant="contained" color="primary" onClick={handleInputClick}>add an item</Button>
        <Button variant="contained" color="primary" onClick={handleFilterFinished}>show unfinished item</Button>
        <Button variant="contained" color="primary" onClick={handleFilterNone}>show all item</Button>
    </div>);
};
