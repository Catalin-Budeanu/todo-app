import { useState } from 'react';

const AddTodoForm = ({ todos, setTodos, theme }) => {
  let [currentId, setCurrentId] = useState(1);

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

  return (
    <form onSubmit={handleSubmit} className={`add-todo-form ${theme}-theme`}>
      <input
        type="text"
        placeholder="Create a new todo..."
        name="todo-text"
        className={`create-todo-section ${theme}-theme`}
      />
      <button className={`button-create-todo-section ${theme}-theme`}>
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
