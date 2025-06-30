import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AddTodoForm from './components/AddTodoForm';
import TodoSection from './components/TodoSection';
import TodosFooter from './components/TodosFooter';
import BackgroundWhiteTheme from './assets/background-white-theme.svg';
import BackgroundDarkTheme from './assets/background-dark-theme.svg';

const App = () => {
  const [todos, setTodos] = useState([]);
  let [selectedFilter, setSelectedFilter] = useState('all');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(`${theme}-theme`);
  }, [theme]);

  const displayedTodos = todos.filter((todo) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'active' && todo.isCompleted === false) return true;
    if (selectedFilter === 'completed' && todo.isCompleted === true)
      return true;
  });

  const switchTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  console.log(todos);
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${
            theme === 'light' ? BackgroundWhiteTheme : BackgroundDarkTheme
          })`,
          height: '50vh',
          width: '100vw',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <div className="elements-card">
        <Navbar theme={theme} switchTheme={switchTheme} />
        <AddTodoForm todos={todos} setTodos={setTodos} theme={theme} />
        {displayedTodos.map((todo) => (
          <TodoSection
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            theme={theme}
          />
        ))}

        <TodosFooter
          todos={todos}
          setTodos={setTodos}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          theme={theme}
        />
      </div>
    </>
  );
};

export default App;
