import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [],
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleChange (e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleBtnClick () {
    // alert('hello')
    if (!this.state.inputValue) {
      return
    }
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  handleDelete (index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({list})
  }
  getItems () {
    return (
      this.state.list.map((item, index) => {
        return (
          <TodoItem content={item} index={index} delete={this.handleDelete} key={index} />
        )
      })
    )
  }
  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handleChange} />
          <button className="red-btn" onClick={this.handleBtnClick}>add</button>
        </div>
        {/* <ul>{this.getItems()}</ul> */}
        <ul>
        <TodoItem content={this.state.inputValue} index={'sdd'} delete={this.handleDelete} key={'index'} />
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;
