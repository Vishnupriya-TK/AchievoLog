import React from 'react';
import Header from '../components/Header';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <Header />
      <div className="dashboard-container">
        <h2>Welcome to the Dashboard</h2>
        <p>This is the main dashboard after login.</p>
      </div>
    </div>
  );
};

export default Dashboard;
