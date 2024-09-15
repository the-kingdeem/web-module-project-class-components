import React from 'react'

export default class Form extends React.Component {
  state ={
    name: ""
  }

  onSubmit = evt => {
    evt.preventDefault()
    this.props.addTodo(this.state.name)
    this.setState({
      name: ''
    })
  }
  
  onChange = evt => {
    this.setState({
    name: evt.target.value
    })
  }

  render() {
    
    return (
     <form onSubmit={this.onSubmit}>
      <input type="text" value={this.state.name} onChange={this.onChange}/>
      <input type="submit"/>
     </form>
    )
  }
}
