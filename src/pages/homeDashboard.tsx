import React from 'react';
import InternProfileCard from '../components/internProfileSection';
import AssignedProjectInfo from '../components/projectSection';
import TeamMembersList from '../components/teamMembersSection';
import AnnouncementsSection from '../components/announcemnetSection';

const DashboardHome = () => (
   <div className="app">
      <h1>🧑‍💻 Intern Dashboard</h1>
  <div className="dashboard">
    <div className="top-section">
      <InternProfileCard
        name="Aarav Sharma"
        role="Frontend Intern"
        email="aarav@example.com"
        college="IIT Bombay"
        year="3rd Year"
      />
      <AssignedProjectInfo />
    </div>
    <TeamMembersList />
    <AnnouncementsSection />
  </div>
  </div>
);

export default DashboardHome;
