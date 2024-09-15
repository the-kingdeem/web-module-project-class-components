import React from 'react'
import Form from './Form';
import TodoList from './TodoList';

let id = 0
let getId = () => ++id

const initialTodos = [
  {id: getId(), name: "Walk", completed: false},
  {id: getId(), name: "Run", completed: true},
  {id: getId(), name: "Talk", completed: false},
  {id: getId(), name: "Slide", completed: true}
]

export default class App extends React.Component {
  state = {
    todos: initialTodos
  }

  addTodo = (name) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.concat({id: getId(), completed: false, name})
    })
  }

  toggleComp = id => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(newTodo => {
        if (id == newTodo.id) {
          return {...newTodo, completed: !newTodo.completed}
        }
        return newTodo
      })
    })
  }

  render() {
    return (
      <div className='App'>
        <h1>Todos:</h1>
        <TodoList todos={this.state.todos} toggleComp={this.toggleComp} />
        <Form addTodo={this.addTodo}/>
      </div>
    )
  }
}
