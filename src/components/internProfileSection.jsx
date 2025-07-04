import React from 'react';

const InternProfileCard = ({ name, role, email, college, year }) => (
  <div className="card">
    <h2>{name}</h2>
    <p><strong>Role:</strong> {role}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>College:</strong> {college}</p>
    <p><strong>Year:</strong> {year}</p>
  </div>
);

export default InternProfileCard;
