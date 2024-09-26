import TodoApi from "../../Api/TodoApi";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

export default function TodoList() {


 const {
    data: todos,
    dataUpdatedAt,
    isLoading,
    isFetching,
    isError,
    error,
    refetch
  } = useQuery(["todo"], TodoApi.getAll, {
    //
    // refetchOnMount:false,//
    // refetchInterval:15000 // refrech server for fresh data
    refetchOnWindowFocus: true,
    enabled: false,
    retry: 0, //
    cacheTime: 50000, // = 50 sec
    staleTime: 10000, // 10 sec
    onError:(err) => {
      console.error(err);
    },
    onSuccess:(data) => {
      console.log(data); 
    },
    select:
      (data) =>
        data.data.map((todo) => {
          return {
            id: todo.id,
            title: todo.title,
            completed: todo.completed,
          };
        }),
  });


  
  async function deleteCallBack(e) {
    e.preventDefault();
    const id = e.currentTarget.value;
    try {
      await TodoApi.delete(id);
      //setTodos(todos.filter(todo => todo.id !== id)); // Update state without reloading
    } catch (error) {
      console.error(error);
    }
  }

  if (isLoading || isFetching) {
    return <h6>Loading .... </h6>;
  }

  if (isError) {
    return <h6 className="alert alert-danger">Error: {error.message}</h6>;
      
    }
    
  return (
    <div className="container ">
      <button className="btn btn-primary" disabled={isFetching} onClick={refetch}>Refetch Data</button>
      <p> {dataUpdatedAt ? `Last Update: ${new Date(dataUpdatedAt).toDateString()}` : "Refetch to Update Data"}</p>
      <p> {dataUpdatedAt ? `${new Date(dataUpdatedAt).toTimeString().substring(0,8)}` : ""}</p>
     
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
          {todos &&
            todos.map((todo, index) => (
              <tr key={todo.id}>
                <td>{index + 1}</td>
                <td>{todo.id}</td>
                <td
                  className={`text-decoration-${
                    todo.completed ? "line-through" : "none fw-bolder"
                  }`}
                >
                  {todo.title}
                </td>

                <td>{todo.completed ? <span>✅</span> : <span>❌</span>}</td>

                <td>
                <Link to={`todo/${todo.id}/details`}>
                    <button className="btn btn-sm mx-1 btn-info rounded-pill m-1">
                      Details
                    </button>
                  </Link>

                  <Link to={`todo/${todo.id}/update`}>
                    <button className="btn btn-sm mx-1 btn-warning rounded-pill m-1">
                      Update
                    </button>
                  </Link>

                  <button
                    onClick={deleteCallBack}
                    value={todo.id}
                    className="btn btn-sm mx-1 btn-danger rounded-pill m-1"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
