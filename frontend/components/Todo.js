import React from 'react'

export default class Todo extends React.Component {
  render() {
    const {name, toggleComp} = this.props
    return (
      <li onClick={() => toggleComp(name.id)}>
        {name.name}
      </li>
    )
  }
}
