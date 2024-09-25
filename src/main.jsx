import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./Components/Todo/TodoList";
import Layout from "./Components/Layout.jsx";
import TodoCreate from "./Components/Todo/TodoCreate.jsx";
import TodoUpdate from "./Components/Todo/TodoUpdate.jsx";
import "bootstrap/dist/css/bootstrap.min.css";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<TodoList/>} />
          <Route path="/todo/create" element={<TodoCreate/>} />
          <Route path="/todo/:id/update" element={<TodoUpdate/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
