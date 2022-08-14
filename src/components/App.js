import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Menu } from './Menu';
import { Users } from './Users';

const Tasks = () => <div>Tasks</div>;

export const App = () => {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/" element={<Users />} />
      </Routes>
    </Router>
  )
};
