import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import TodoManager from './pages/TodoManager';
import Page404 from './pages/Page404';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/todos" />} />
      <Route path="/todos" element={<TodoManager />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default App;
