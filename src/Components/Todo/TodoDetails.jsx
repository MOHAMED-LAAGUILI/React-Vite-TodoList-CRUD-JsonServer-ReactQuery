// TodoDetails.jsx
import { useParams } from "react-router-dom";
import TodoApi from "../../Api/TodoApi";
import { useQuery } from "react-query"; // import useQuery only
import { Link } from "react-router-dom";
import queryClient from "../../queryClient/queryClient.jsx";


export default function TodoDetails() {
  const { id } = useParams();
  const {
    data: todo,
    isLoading,
    isError,
    error,
  } = useQuery(["todo", id], () => TodoApi.get(id), {
    staleTime: 50000,
    initialData: () => {
      const todoData = queryClient.getQueryData('todos');
      return todoData?.find((todoItem) => todoItem.id === id);
    }
  });

  if (isLoading) {
    return <h6 className="fw-bold" >Loading .... </h6>;
  }

  if (isError) {
    return <h6 className="alert alert-danger">Error: {error.message}</h6>;
  }

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title text-decoration-underline">Details</h4>
          <p className="card-text">
            <b> Todo ID : </b>
            {todo.id}
          </p>
          <p className="card-text">
            <b> Todo Title : </b> {todo.title}
          </p>
          <p className="card-text">
            <b> Completed Status : </b>{" "}
            {todo.completed ? (
              <span>✅ Completed</span>
            ) : (
              <span>❌ Uncompleted</span>
            )}
          </p>
        </div>
      </div>
      <br />
      <Link to={"/"} className="btn btn-primary">Back to List</Link>
    </>
  );
}