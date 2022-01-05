import React from 'react';
import TodoList from './Todo/TodoList';
import Context from './context';
import AddTodo from './Todo/addTodo';
import CardList from './cardList/cardList';
import './App.css';
import Button from './components/button';
import Counter from './components/Counter';
import Posts from './components/Posts';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    fetch('https://reqres.in/api/users?per_page=12')
      .then((response) => response.json())
      .then((result) => {
        this.users = result.data;
        console.log(this.users);
        this.setState({ users: result.data });
      });
  }
  renderUsers() {
    if (this.state.users.length) {
      return <CardList userList={this.state.users} />;
    }
    return <div>Загрузка...</div>;
  }

  render() {
    /* const [todos, setTodos] = React.useState([
      {
        id: 1,
        completed: false,
        title: 'buy bread',
      },
      {
        id: 2,
        completed: false,
        title: 'buy milk',
      },
      {
        id: 3,
        completed: false,
        title: 'buy sugar',
      },
    ]);

    function toggleTodo(id) {
      console.log('todo.completed', todos.completed);
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      );
    }

    function removeTodo(id) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }

    function addTodo(title) {
      setTodos(
        todos.concat([
          {
            title,
            id: Date.now(),
            completed: false,
          },
        ])
      );
    }*/

    return (
      /* <Context.Provider value={{ removeTodo }}>
        <div className="wrapper">
          <h1>React tutotial</h1>
          <AddTodo onCreate={addTodo} />
          {todos.length ? (
            <TodoList todos={todos} onToggle={toggleTodo} />
          ) : (
            <p>No todos</p>
          )}*/

      <div className="App">
        <div>
          <h1>Список пользователей</h1>
          {this.renderUsers()}
        </div>
        <Button />
        <Counter />
        <Posts />
      </div>
      // </
      //   </Context.Provider>
    );
  }
}
export default App;
