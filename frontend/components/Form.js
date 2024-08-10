import React from 'react'

export default class Form extends React.Component {
  render() {
    const {addName, inputChangeHandler, inputVal, toggleHideComp, hideCompleted} = this.props
    return (
      <form onSubmit={addName}>
        <input type='text' placeholder='Type todo' onChange={inputChangeHandler} value={inputVal}/>
        <button type='submit'>Submit</button>
        <button type='button' onClick={toggleHideComp}>{hideCompleted ? 'Show Completed' : 'Hide Completed'}</button>
      </form>
    )
  }
}
