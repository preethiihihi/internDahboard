import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const TeamMembersList = () => {
     const navigate = useNavigate();
   const members = [
    { name: 'Riya Patel', role: 'Backend Developer' },
    { name: 'Kunal Mehta', role: 'UI/UX Designer' },
    { name: 'Sneha Rao', role: 'QA Engineer' },
    { name: 'Dev Joshi', role: 'DevOps Engineer' },
    { name: 'Meera Singh', role: 'Product Manager' },
    { name: 'Arjun Verma', role: 'Frontend Developer' },
    { name: 'Neha Kulkarni', role: 'Technical Writer' },
    { name: 'Yash Naik', role: 'Security Analyst' },
    { name: 'Divya Nair', role: 'Mobile App Developer' },
    { name: 'Tanmay Shah', role: 'Data Scientist' },
  ];
  return (
    <div className="card">
       <div className="team-header">
        <h2>Team Members</h2>
        <Link to="/employee-list" className="team-link">View All</Link>
      </div>
      <div className="team-scroll">
        {members.map((member, index) => (
          <div className="team-card" key={index}>
            <h3>{member.name}</h3>
            <p><em>{member.role}</em></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembersList;
