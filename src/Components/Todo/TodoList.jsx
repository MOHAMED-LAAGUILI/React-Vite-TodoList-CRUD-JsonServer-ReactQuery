import { useState, useEffect } from "react";
import TodoApi from "../../Api/TodoApi";
import { Link } from "react-router-dom";



export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      const response = await TodoApi.getAll();
      setTodos(response);
    }
    fetchTodos();
  }, []);

  const deleteCallBack = async (e) => {
    e.preventDefault();
    const id = e.currentTarget.value;
    try {
      await TodoApi.delete(id);
      window.location.reload()
    } catch (error) {
      console.error(error);
    }
  }

 

  return (
    <div className="container">
     

      <h1 className="text-center">Todo List</h1>
      <table className="table table-striped text-center" border={"1"}>
        <thead>
          <tr>
            <th>Index</th>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo,index) => (
            <tr key={todo.id}>
              <td>{index+1}</td>
              <td>{todo.id}</td>
              <td  className={`text-decoration-${
                todo.completed
                  ? "line-through"
                  : "none fw-bolder"
              }`}>{todo.title}</td>

              <td>
                {todo.completed ? (
                  <span>✅</span>
                ) : (
                  <span>❌</span>
                )}
              </td>

              <td>
                <Link to={`todo/${todo.id}/update`}>
                <button className="btn btn-sm mx-1 btn-warning rounded-pill m-1">Update</button>
                </Link>
                
                <button onClick={deleteCallBack} value={todo.id} className="btn btn-sm mx-1 btn-danger rounded-pill m-1">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}