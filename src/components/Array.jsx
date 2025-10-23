function TodoList() {
  const todos = ["Wake up", "Drink Coffee", "Learn React"];

  return (
    <div className="app">
      <h2>Array Example: Todo List</h2>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            {i + 1}. {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
