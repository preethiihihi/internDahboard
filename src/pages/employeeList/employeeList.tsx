import React from 'react';
import './EmployeeList.css';

interface Employee {
  name: string;
  role: string;
  manager: string;
  email: string;
  department: string;
}

const employees: Employee[] = [
  {
    name: 'Riya Patel',
    role: 'Backend Developer',
    manager: 'Amit Shah',
    email: 'riya.patel@example.com',
    department: 'Engineering',
  },
  {
    name: 'Kunal Mehta',
    role: 'UI/UX Designer',
    manager: 'Nidhi Verma',
    email: 'kunal.mehta@example.com',
    department: 'Design',
  },
  {
    name: 'Sneha Rao',
    role: 'QA Engineer',
    manager: 'Nidhi Verma',
    email: 'sneha.rao@example.com',
    department: 'Quality Assurance',
  },
  {
    name: 'Dev Joshi',
    role: 'DevOps Engineer',
    manager: 'Amit Shah',
    email: 'dev.joshi@example.com',
    department: 'Operations',
  },
  {
    name: 'Meera Singh',
    role: 'Product Manager',
    manager: 'Arun Shetty',
    email: 'meera.singh@example.com',
    department: 'Product',
  },
  {
    name: 'Kunal Mehta',
    role: 'UI/UX Designer',
    manager: 'Nidhi Verma',
    email: 'kunal.mehta@example.com',
    department: 'Design',
  },
  {
    name: 'Sneha Rao',
    role: 'QA Engineer',
    manager: 'Nidhi Verma',
    email: 'sneha.rao@example.com',
    department: 'Quality Assurance',
  },
  {
    name: 'Dev Joshi',
    role: 'DevOps Engineer',
    manager: 'Amit Shah',
    email: 'dev.joshi@example.com',
    department: 'Operations',
  },
];

const EmployeeList: React.FC = () => (
  <div className="card">
    <h2>Employee Directory</h2>
    <table className="employee-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Manager</th>
          <th>Email</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp, index) => (
          <tr key={index}>
            <td>{emp.name}</td>
            <td>{emp.role}</td>
            <td>{emp.manager}</td>
            <td><a href={`mailto:${emp.email}`}>{emp.email}</a></td>
            <td>{emp.department}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default EmployeeList;
