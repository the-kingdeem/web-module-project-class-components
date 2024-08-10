import React from 'react'
import Form from './Form';
import TodoList from './TodoList';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      names: [],
      inputVal: '',
      nextId: 1,
      hideCompleted: false
    }
  }

  addName = (evt) => {
    evt.preventDefault()
    const newName = {
      name: this.state.inputVal,
      id:this.state.nextId,
      completed: false
    }

    this.setState((prevState) => ({
      names: [...prevState.names, newName],
      inputVal: '',
      nextId: prevState.nextId + 1
    }))
  };

  toggleComp = (id) => {
    this.setState((prevState) => ({
      names: prevState.names.map(name =>
        name.id === id ? { ...name, completed: !name.completed } : name
      )
    }));
  };

  clearComp = () => {
    this.setState((prevState) => ({
      names: prevState.names.filter(name => !name.completed)
    }));
  };

  toggleHideComp = () => {
    this.setState((prevState) => ({
      hideCompleted: !prevState.hideCompleted
    }), () => console.log('hideCompleted:', this.state.hideCompleted));
  };

  inputChangeHandler = (evt) => {
    this.setState({inputVal: evt.target.value})
  }

  render() {
    const visibleNames = this.state.hideCompleted
      ? this.state.names.filter(name => !name.completed)
      : this.state.names

    return (
      <div className='App'>
        <h1>Todos:</h1>
        <Form
            inputVal={this.state.inputVal}
            inputChangeHandler={this.inputChangeHandler}
            addName={this.addName}
            onClick={this.clearComp}
            toggleHideComp={this.toggleHideComp} 
            hideCompleted={this.state.hideCompleted}
          />
          <TodoList names={visibleNames} toggleComp={this.toggleComp} />
      </div>
    )
  }
}
