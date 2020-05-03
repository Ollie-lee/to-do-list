import React from 'react';
import TodoInput from '../TodoInput/TodoInput'
import TodoList from '../TodoList/TodoList'
export default class TodoApp extends React.Component {
    constructor() {
        super();
        this.state = {
            itemList: [{
                id: new Date().getTime(),
                value: "first item",
                complete: false,
                display:true,
            }],
            input: '',
        }
    }


    handleInputChange = (e) => {
        this.setState({
            input: e.target.value,
        })
    }

    // handleInputClick = (e) => {
    //     this.setState((prevState) => {
    //         const tempInput = this.state.input;
    //         return {
    //             input: '',
    //             itemList: prevState.itemList.concat([{
    //                 id: new Date().getTime(),
    //                 value: tempInput,
    //                 complete: false,
    //             }])
    //         }
    //     })
    // }

    handleInputClick = (e) => {
        this.setState(() => {
            const tempInput = this.state.input;
            if (this.state.input === '') return;
            return {
                input: '',
                itemList: this.state.itemList.concat([{
                    id: new Date().getTime(),
                    value: tempInput,
                    complete: false,
                    display: true,
                }])
            }
        })
    }

    handleDeleteClick = (id) => {
        this.setState((prevState) => {
            return {
                itemList: prevState.itemList.filter((item) => {
                    return item.id !== id
                })
            }
        })
    }

    // handleCompleteClick = (id) => {
    //     this.setState((prevState) => {
    //         return {
    //             itemList: prevState.itemList.map((item) => {
    //                 if (item.id === id) {
    //                     item.complete = !item.complete;
    //                 }
    //                 return item
    //             })
    //         }
    //     })
    // }

    handleCompleteClick = (id) => {
        this.setState({
            itemList: this.state.itemList.map((item) => {
                if (item.id === id) {
                    item.complete = !item.complete;
                }
                return item
            })
        })
    }

    handleFilterFinished = () => {

        this.setState({
            itemList: this.state.itemList.map((item) => {
                if (item.complete === true) {
                    item.display = false
                }
                return item;
            })
        })
    }

    handleFilterNone = () => {

        this.setState({
            itemList: this.state.itemList.map((item)=>{
                item.display = true;
                return item;
            })
        })
    }
    render() {
        return (
            <div>
                <TodoList {...this.state} handleDeleteClick={this.handleDeleteClick} handleCompleteClick={this.handleCompleteClick} />
                <TodoInput {...this.state} handleInputChange={this.handleInputChange} handleInputClick={this.handleInputClick} handleFilterFinished={this.handleFilterFinished} handleFilterNone={this.handleFilterNone} />
            </div>
        )
    }
}