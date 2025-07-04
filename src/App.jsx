import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeList from './pages/employeeList/employeeList';
import DashboardHome from './pages/homeDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/employee-list" element={<EmployeeList />} />
        <Route path="/" element={<DashboardHome />} />
      </Routes>
    </Router>
  );
}

export default App;
