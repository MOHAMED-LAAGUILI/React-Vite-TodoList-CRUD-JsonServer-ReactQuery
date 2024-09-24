import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import TodoList from './Components/Todo/TodoList';
import Layout from './Components/Layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={Layout} >
      <Route index element={TodoList}/>  
      <Route path="/todo/update/:id" element={TodoList} />
      <Route path="/todo/delete/:id" element={TodoList} />
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)