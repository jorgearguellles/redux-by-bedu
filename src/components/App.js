import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Menu } from './Menu';
import Users from './Users';
import Publications from './Publications';

const Tasks = () => <div>Tasks</div>;

export const App = () => {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={ <Users /> } />
        <Route path="/tasks" element={ <Tasks /> } />
        <Route path="/publications/:key" element={ <Publications /> } />
      </Routes>
    </Router>
  )
};
