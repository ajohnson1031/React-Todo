import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css";

const todos = [
  { task: "Learn Coding", id: 1567651125333, completed: false },
  { task: "Build Enterprise Application", id: 1567651213529, completed: false },
  { task: "Defeat Zuckerberg", id: 1567651223566, completed: false },
  { task: "Takeover Earth", id: 1567651231400, completed: false }
];

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos
    };
  }

  toggleItem = itemID => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === itemID) return { ...todo, completed: !todo.completed };
        return todo;
      })
    });
  };

  handleSubmit = (e, itemName) => {
    e.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        { task: itemName, id: Date.now(), completed: false }
      ]
    });
  };

  clearCompleted = () => {
    this.setState({
      todos: [...this.state.todos.filter(todo => !todo.completed)]
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleSubmit={this.handleSubmit} />
        <TodoList
          todos={this.state.todos}
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
