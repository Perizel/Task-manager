import React from 'react';
import { BsFillCheckSquareFill } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import { FcUndo } from 'react-icons/fc';
import './TaskItem.css';

const TaskItem = ({ task, deleteTask, completeTask, undoCompleteTask }) => {
  const { id, title, description, dueDate, completed } = task;
  const formattedDueDate = dueDate.toLocaleDateString('en-GB');

  return (
    <div className={`task-item ${completed ? 'completed' : ''}`}>
      <div className="task-details">
        <h3 className="task-title">{title}</h3>
        <p className="task-description">{description}</p>
        <p className="task-due-date">Due Date: {formattedDueDate}</p>
      </div>
      <div className="task-actions">
        <button className="complete-button" onClick={() => completeTask(id)}>
          <BsFillCheckSquareFill />
        </button>
        <button className="delete-button" onClick={() => deleteTask(id)}>
          <AiFillDelete />
        </button>
        {completed && (
          <button
            className="undo-button"
            onClick={() => undoCompleteTask(id)}
          >
            <FcUndo />
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskItem;