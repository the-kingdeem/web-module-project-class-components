import React from 'react'
import Name from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.names.map((name) => (
          <Name name={name} toggleComp={this.props.toggleComp} key={name.id} />
        ))}
      </ul>
    )
  }
}
