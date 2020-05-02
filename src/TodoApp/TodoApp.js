import React from 'react';
import TodoInput from '../TodoInput/TodoInput'
import TodoList from '../ToDoList/TodoList'
export default class TodoApp extends React.Component {
    constructor() {
        super();
        this.state = {
            itemList: [],
            input: '',
        }
    }


    handleInputChange = (e) => {
        this.setState({
            input: e.target.value,
        })
    }

    handleInputClick = (e) => {
        this.setState((prevState) => {
            return {
                itemList: prevState.itemList.concat([{
                    id: new Date().getTime(),
                    value: this.state.value,
                    complete: false,
                }])
            }
        })
    }


    render() {
        return (
            <div>
                <TodoList {...this.state} />
                <TodoInput {...this.state} handleInputChange={this.handleInputChange} handleInputClick={this.handleInputClick} />
            </div>
        )
    }
}