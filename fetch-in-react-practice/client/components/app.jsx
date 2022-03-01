import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    fetch('/api/todos')
      .then(res => res.json())
      .then(todos => this.setState({ todos }));
  }

  addTodo(newTodo) {
    const addTodo = JSON.stringify(newTodo);
    const postHeader = [
      ['Content-Type', 'application/json']
    ];
    fetch('/api/todos', { method: 'POST', headers: postHeader, body: addTodo })
      .then(res => res.json())
      .then(addedTodo => this.setState({ todos: this.state.todos.concat(addedTodo) }));
  }

  toggleCompleted(todoId) {
    const selectedState = this.state.todos.filter(i => i.todoId === todoId)[0];
    const selectedId = selectedState.todoId;
    const isCompleted = JSON.stringify({ isCompleted: !selectedState.isCompleted });
    const putHeader = [
      ['Content-Type', 'application/json']
    ];
    fetch(`/api/todos/${selectedId}`, { method: 'PATCH', headers: putHeader, body: isCompleted })
      .then(res => res.json())
      .then(editedTodo => this.setState({
        todos: this.state.todos.map(item => {
          return (item.todoId === todoId) ? editedTodo : item;
        })
      }));

    /**
     * Find the index of the todo with the matching todoId in the state array.
     * Get its "isCompleted" status.
     * Make a new object containing the opposite "isCompleted" status.
     * Use fetch to send a PATCH request to `/api/todos/${todoId}`
     * Then 😉, once the response JSON is received and parsed,
     * replace the old todo in the state array.
     *
     * NOTE: "toggle" means to flip back and forth, so clicking a todo
     * in the list should "toggle" its isCompleted status back and forth.
     *
     * Do not mutate the original state array, nor any objects within it.
     * https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
     *
     * TIP: Be sure to SERIALIZE the updates in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
