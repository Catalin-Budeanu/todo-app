const filters = [
  {
    value: 'all',
    label: 'All',
  },
  {
    value: 'active',
    label: 'Active',
  },
  {
    value: 'completed',
    label: 'Completed',
  },
];

const TodosFooter = ({
  todos,
  setTodos,
  selectedFilter,
  setSelectedFilter,
  theme,
}) => {
  const numberOfUncompletedTodos = todos.filter(
    (todo) => todo.isCompleted === false
  ).length;

  const handleFilterChange = (newFilter) => {
    setSelectedFilter(newFilter);
  };

  const handleRemoveCompleted = () => {
    const newTodos = todos.filter((todo) => todo.isCompleted === false);

    setTodos(newTodos);
  };

  return (
    <div className={`todos-footer-container ${theme}-theme`}>
      <div className="todo-status-bar">
        <p> {numberOfUncompletedTodos} items left</p>
        <button onClick={handleRemoveCompleted}>Clear Completed</button>
      </div>
      <div className="todo-settings-buttons">
        {filters.map((filter) => (
          <button
            key={filter.value}
            className={`${
              selectedFilter === filter.value ? 'selected-filter' : ''
            } ${theme}-theme`}
            onClick={() => handleFilterChange(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};
export default TodosFooter;
