import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './TaskForm.css';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: new Date(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title.trim() && task.description.trim()) {
      const newTask = {
        id: new Date().getTime().toString(),
        title: task.title,
        description: task.description,
        dueDate: task.dueDate,
        completed: false,
      };
      addTask(newTask);
      setTask({
        title: '',
        description: '',
        dueDate: new Date(),
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleDueDateChange = (date) => {
    setTask((prevTask) => ({
      ...prevTask,
      dueDate: date,
    }));
  };

  return (
    <div className="task-form-container">
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={task.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={task.description}
          onChange={handleChange}
          required
        />
        <div className="datepicker-container">
          <label className="datepicker-label">Due Date:</label>
          <DatePicker
            selected={task.dueDate}
            onChange={handleDueDateChange}
            dateFormat="dd/MM/yyyy"
            className="datepicker-input"
          />
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
