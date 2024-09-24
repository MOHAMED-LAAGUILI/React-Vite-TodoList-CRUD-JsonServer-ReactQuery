import { useState, useEffect } from "react";
import TodoApi from "../../Api/TodoApi";
import TodoForm from "./TodoForm";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      const response = await TodoApi.getAll();
      setTodos(response);
    }
    fetchTodos();
  }, []);

  const onCreateCallback = (todo) => {
    setTodos((prevState) => [...prevState, todo]);
  };

  return (
    <div className="container">
      <h1 className="text-center">Todo Form</h1>
      <TodoForm onCreate={onCreateCallback} />

      <h1 className="text-center">Todo List</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo,index) => (
            <tr key={todo.id}>
              <td>{index+1}</td>
              <td  className={`text-decoration-${
                todo.completed
                  ? "line-through"
                  : "none fw-bolder"
              }`}>{todo.title}</td>

              <td>
                {todo.completed ? (
                  <span className="badge bg-success rounded-pill">✅ Completed </span>
                ) : (
                  <span className="badge bg-danger rounded-pill">❌ Not Completed</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}