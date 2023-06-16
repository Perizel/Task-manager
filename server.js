const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const users = [];

app.post('/auth/register', (req, res) => {
  const { username, password } = req.body;
  const userExists = users.find((user) => user.username === username);

  if (userExists) {
    res.status(400).json({ error: 'Username already exists' });
  } else {
    const newUser = { username, password };
    users.push(newUser);
    res.status(200).json({ message: 'Registration successful' });
  }
});

app.post('/auth/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username && user.password === password);

  if (user) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ error: 'Invalid username or password' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
