import React from 'react';

const AnnouncementsSection = () => {
  const announcements = [
    ' Team outing scheduled for next Friday! 🎉',
    ' Submit weekly reports by Monday 10 AM.📢',
    ' Server maintenance on Sunday at 2 AM.🛠️',
    ' New internship openings coming next month!✉️',
    ' Password update required before July 15th.🔒',
  ];

  return (
    <div className="card">
      <h2>Announcements</h2>
      <ul>
        {announcements.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
};

export default AnnouncementsSection;
