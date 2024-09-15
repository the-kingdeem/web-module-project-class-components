import React from 'react'

export default class Todo extends React.Component {
  render() {
    const {id, name, completed} = this.props.todo
    const {toggleComp} = this.props
   
    return (
      <div onClick={() => toggleComp(id)}>
        {name} {completed && ' ✅'}
      </div>
    )
  }
}
