const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const userRouter = require('./routes/user');

app.use('', userRouter);


app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
