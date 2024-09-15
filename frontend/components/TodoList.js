import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  state = {
    showList: true
  }

  toggleList = evt => {
    this.setState({
      ...this.state,
      showList: !this.state.showList
    })
  }

  render() {
    const {todos, toggleComp} = this.props
    const filtered = todos.filter(todo => !todo.completed || this.state.showList)

    return (
      <div>
        {filtered.map(todo => (<Todo key={todo.id} todo={todo} toggleComp={toggleComp}/>))}
        <button onClick={this.toggleList}>{this.state.showList ? "Hide Completed" : "Show All"}</button>
      </div>
    )
  }
}
