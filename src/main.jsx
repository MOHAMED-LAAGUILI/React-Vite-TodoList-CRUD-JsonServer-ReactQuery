import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./Components/Todo/TodoList";
import Layout from "./Components/Nav.jsx";
import TodoCreate from "./Components/Todo/TodoCreate.jsx";
import TodoUpdate from "./Components/Todo/TodoUpdate.jsx";
import TodoDetails from "./Components/Todo/TodoDetails.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { QueryClient, QueryClientProvider } from "react-query";


const queryClient = new QueryClient()

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient} >

  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<TodoList/>} />
          <Route path="/todo/create" element={<TodoCreate/>} />
          <Route path="/todo/:id/update" element={<TodoUpdate/>} />
          <Route path="/todo/:id/details" element={<TodoDetails/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
  </QueryClientProvider>
);
