import React from 'react';
import './Welcome.css';

const Welcome = () => (
  <div className="welcome-container">
    <h1>Welcome to Task Manager!</h1>
    <div className="instructions-container">
      <h2>Getting Started</h2>
      <ol>
        <li>Create a new account or login if you already have one.</li>
        <li>Once logged in, you'll be taken to the Dashboard.</li>
        <li>Click on the "Add Task" button to create a new task.</li>
        <li>Fill in the details of the task such as title, description, and due date.</li>
        <li>Click "Add task" to add the task to your task list.</li>
        <li>To mark a task as complete, simply click on the mark button under the task.</li>
        <li>You can also undo the complete action or delete a task by clicking on the corresponding buttons.</li>
        <li>Use the search bar to filter tasks based on title or description.</li>
        <li>Sort tasks by due date, priority, or completion status using the sorting options.</li>
        <li>Stay organized and productive by managing your tasks effectively!</li>
      </ol>
      <p><em>Happy Organizing!!!</em></p>
    </div>
  </div>
);

export default Welcome;
