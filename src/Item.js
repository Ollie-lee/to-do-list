import React from 'react';
import logo from './logo.svg';
import './App.css';

class Item extends React.Component {
  constructor() {
    super();

    this.state = {
      finish: false,
    }
  }

  handleCheck = (e) => {
    this.setState({
      finish: (this.state.finish === false) ? true : false,
    })
  }



  render() {
    return (
      <form>
        <label htmlFor="finished">finished?</label>
        <input type="checkbox" id="finished" value={this.state.finish} onClick={this.handleCheck}></input>
        <div></div>
        <input type="text" disabled={this.state.finish} ></input>
      </form>
    );
  }
}

export default Item;
