import { useState } from 'react';

import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  let [currentId, setCurrentId] = useState(1);
  const numberOfUncompletedTodos = todos.filter(
    (todo) => todo.isCompleted === false
  ).length;

  let [selectedButton, setSelectedButton] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    const newTodos = [...todos];
    newTodos.push({
      id: currentId,
      text: data.get('todo-text'),
      isCompleted: false,
    });

    setTodos(newTodos);
    setCurrentId(currentId + 1);
  };

  console.log(todos);

  const handleCheck = (todoId) => {
    const newTodos = [...todos];

    const todoIndex = newTodos.findIndex((todo) => todo.id === todoId);
    newTodos[todoIndex].isCompleted = !newTodos[todoIndex].isCompleted;

    setTodos(newTodos);
  };

  const handleDelete = (todoId) => {
    const newTodos = [...todos];

    const todoIndex = newTodos.findIndex((todo) => todo.id === todoId);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  const handleClickButtonAll = () => {
    setSelectedButton('all');
  };

  const handleClickButtonActive = () => {
    setSelectedButton('active');
  };

  const handleClickButtonCompleted = () => {
    setSelectedButton('completed');
  };

  const handleClearCompleted = () => {
    const filteredTodos = todos.filter((todo) => !todo.isCompleted);
    setTodos(filteredTodos);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Create a new todo..."
          name="todo-text"
        />
        <button>Add</button>
      </form>
      {todos.map((todo) => (
        <div key={todo.id} className="todo-container">
          <input onChange={() => handleCheck(todo.id)} type="checkbox" />
          <span
            className={todo.isCompleted === true ? 'todo-is-completed' : ''}
          >
            {todo.text}
          </span>
          <button onClick={handleDelete}>delete</button>
        </div>
      ))}

      <div className="items-left">
        <p>{numberOfUncompletedTodos} items left</p>
      </div>
      <div className="buttons-container">
        <button
          onClick={handleClickButtonAll}
          className={selectedButton === 'all' ? 'selected-button' : ''}
        >
          All
        </button>
        <button
          onClick={handleClickButtonActive}
          className={selectedButton === 'active' ? 'selected-button' : ''}
        >
          Active
        </button>
        <button
          onClick={handleClickButtonCompleted}
          className={selectedButton === 'completed' ? 'selected-button' : ''}
        >
          Completed
        </button>
        <button onClick={handleClearCompleted}>Clear Completed</button>
      </div>
    </>
  );
};

export default App;
