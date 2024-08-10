import React from 'react'

export default class Todo extends React.Component {
  render() {
    const {name, toggleComp} = this.props
    return (
      <li 
      style={{ textDecoration: name.completed ? 'line-through' : 'none', cursor: 'pointer' }}
      onClick={() => toggleComp(name.id)}>
        {name.name}
      </li>
    )
  }
}
