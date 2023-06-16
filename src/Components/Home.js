import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Task Manager</h1>
      <p>
        Task Manager is a simple application to manage your tasks and stay organized.
        Please login or register to get started.
      </p>
      <p>
        With Task Manager, you can:
      </p>
      <ul>
        <li>Create new tasks</li>
        <li>Set due dates for your tasks</li>
        <li>Mark tasks as completed</li>
        <li>Undo task completion</li>
        <li>Delete tasks</li>
      </ul>
      <p>
        Stay organized and never miss a deadline with Task Manager!
      </p>
    </div>
  );
};

export default Home;
