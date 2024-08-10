import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.names.map((name) => (
          <Todo name={name} toggleComp={this.props.toggleComp} key={name.id} />
        ))}
      </ul>
    )
  }
}
