import React from 'react'

class TodoItem extends React.Component{
  static defaultProps = {
      test: '1234',
      age: 24
  }
  state = {
    add: '西大门'
  }
  componentWillMount = () => {
    this.setState({
      add: '东大门'
    })
  }
  // componentDidMount = () => {
  //   this.setState({
  //     add: '男大门'
  //   })
  // }
  componentWillReceiveProps = (nextProps) => {
    console.log('receiveProps', nextProps)
  }
  shouldComponentUpdate = () => {
    return false
  }
  componentWillUpdate = (props, state) => {
    console.log('Willupdete:' , props)
  }
  componentDidUpdate = (props, state) => {
    console.log('Didupdete:' , props)
  }
  handleDelete = () => {
    this.props.delete(this.props.index)
  }
  render () {
    const {content} = this.props
    console.log('props:', this.props)
    console.log('state:', this.state.add)
    return (
      <div onClick={this.handleDelete.bind(this)}>{content}</div>
    )
  }
}
TodoItem.defaultProps = {
  sex: 'nv'
}

export default TodoItem