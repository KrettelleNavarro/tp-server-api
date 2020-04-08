const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const userRouter = express.Router();

app.use('', userRouter);

userRouter.get('/api/users', (req, res) => {
  const users = require('./fixtures');
  res.status(200).json({ users });
});

userRouter.get('/api/users/:id', (req, res) => {
  const user = require('./fixtures').users[req.params.id];

  res.status(200).json({ user });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
