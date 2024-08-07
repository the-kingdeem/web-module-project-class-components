import React from 'react'

export default class Form extends React.Component {
  render() {
    const {addName, inputChangeHandler, inputVal, clearComp} = this.props
    return (
      <form onSubmit={addName}>
        <input type='text' placeholder='Type todo' onChange={inputChangeHandler} value={inputVal}/>
        <button type='submit'>Submit</button>
        <button type='button' onClick={clearComp}>Hide Completed</button>
      </form>
    )
  }
}
