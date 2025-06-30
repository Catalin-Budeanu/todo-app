import xDelete from '../assets/x-delete.svg';

const TodoSection = ({ todo, todos, setTodos, theme }) => {
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

  return (
    <div className={`todo-container ${theme}-theme`}>
      <div className="todo-text-and-checkbox">
        <input
          onChange={() => handleCheck(todo.id)}
          type="checkbox"
          defaultChecked={todo.isCompleted}
          className={`input-todo-section `}
        />
        <span
          className={`${
            todo.isCompleted === true ? 'todo-is-completed' : ''
          } todo-text ${theme}-theme`}
        >
          {todo.text}
        </span>
      </div>
      <button>
        <img onClick={() => handleDelete(todo.id)} src={xDelete} />
      </button>
    </div>
  );
};

export default TodoSection;
