const express = require('express');
const userRouter = require('./routers/user');
const path = require('path');

const publicPath = path.join(__dirname, '..', 'client', 'build');



require('./db/db');

const app = express();

app.use(express.json());
app.use(express.static(publicPath));
app.use('/api/user', userRouter);



app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

module.exports = app;

