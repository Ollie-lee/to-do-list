import React from 'react';
import Item from './Item';

class ToDoList extends React.Component {
    constructor() {
        super();
        this.state = {
            componentArr: [],
        }
    }

    handleAdd = (e) => {
        let arr = [...this.state.componentArr];
        arr.push(1);
        this.setState({
            componentArr: arr,
        })
    }

    handleDel = (e) => {
        let arr = [...this.state.componentArr];
        arr.pop();
        this.setState({
            componentArr: arr,
        });
    }

    componentDidMount(){
        this.handleFilterCom = ()=>{
            let items = this.state.componentArr.map((item, index)=><Item key={index} />)
            this.setState({componentArr: items.filter((item, index)=>item.state.finish===true)});
            console.log(this.state.componentArr);
        }
    }

    render() {
        return (
            <div>
                {this.state.componentArr.map((item, index) => <Item key={index} />)}
                <input type='button' value='add an item' onClick={this.handleAdd}></input>
                <input type='button' value='delete an item' onClick={this.handleDel}></input>
                <div></div>
                <input type='button' value='show completed' onClick={this.handleFilterCom}></input>
                <input type='button' value='show pending' onClick={this.handleFilterPed}></input>
                <input type='button' value='show all' onClick={this.handleFilterAll}></input>
            </div>
        );
    }
}

export default ToDoList;