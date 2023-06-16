import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Button } from 'react-bootstrap';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Welcome from './Components/Welcome';
import './App.css'

const Navigation = ({ loggedIn, handleLogout }) => (
  <Navbar bg="dark" variant="dark" className="fixed-top">
    <Navbar.Brand as={Link} to={loggedIn ? "/welcome" : "/"}>Task Manager</Navbar.Brand>
    <Nav className="mr-auto">
      {loggedIn && (
        <Nav.Link as={Link} to="/tasks">Tasks</Nav.Link>
      )}
    </Nav>
    <Nav className="ml-auto">
      {loggedIn ? (
        <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
      ) : (
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
      )}
    </Nav>
  </Navbar>
);


const TaskPage = ({
  tasks,
  addTask,
  deleteTask,
  completeTask,
  undoCompleteTask,
  handleLogout,
}) => (
  <div className="task-page-container">
    <h1>Task Manager</h1>
    <div className="task-form-container">
      <TaskForm addTask={addTask} />
    </div>
    <TaskList
      tasks={tasks}
      deleteTask={deleteTask}
      completeTask={completeTask}
      undoCompleteTask={undoCompleteTask}
    />
    <Button onClick={handleLogout} className="btn btn-danger">Logout</Button>
  </div>
);


const AppRoutes = ({ loggedIn, handleLogin, handleLogout }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const completeTask = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: true };
        }
        return task;
      })
    );
  };

  const undoCompleteTask = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: false };
        }
        return task;
      })
    );
  };

  return (
    <Routes>
      <Route
        path="/login"
        element={<Login handleLogin={handleLogin} loggedIn={loggedIn} />}
      />
      <Route
        path="/register"
        element={<Register handleLogin={handleLogin} loggedIn={loggedIn} />}
      />
      {loggedIn ? (
        <>
          <Route
            path="/tasks"
            element={
              <TaskPage
                tasks={tasks}
                addTask={addTask}
                deleteTask={deleteTask}
                completeTask={completeTask}
                undoCompleteTask={undoCompleteTask}
                handleLogout={handleLogout}
              />
            }
          />
          <Route path="/welcome" element={<Welcome />} />
        </>
      ) : (
        <Route
          path="/"
          element={<Home handleLogin={handleLogin} loggedIn={loggedIn} />}
        />
      )}
    </Routes>
  );
};

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      <Navigation loggedIn={loggedIn} handleLogout={handleLogout} />
      <AppRoutes
        loggedIn={loggedIn}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
    </Router>
  );
};

export default App;
