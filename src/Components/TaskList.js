import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = ({ tasks, deleteTask, completeTask, undoCompleteTask }) => (
  <div className="task-list-container">
    <h2 className="task-list-title">My Task</h2>
    {tasks.map((task) => (
      <TaskItem
        key={task.id}
        task={task}
        deleteTask={deleteTask}
        completeTask={completeTask}
        undoCompleteTask={undoCompleteTask}
      />
    ))}
  </div>
);

export default TaskList;
