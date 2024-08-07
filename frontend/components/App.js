import React from 'react'
import Form from './Form';
import TodoList from './TodoList';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      names: [],
      inputVal: '',
      id: 1,
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

  inputChangeHandler = (evt) => {
    this.setState({inputVal: evt.target.value})
  }

  render() {
    return (
      <div className='App'>
        <h1>Todos:</h1>
        <Form
            inputVal={this.state.inputVal}
            inputChangeHandler={this.inputChangeHandler}
            addName={this.addName}
            clearComp={this.clearComp}
          />
          <TodoList names={this.state.names} toggleComp={this.toggleComp} />
      </div>
    )
  }
}
