const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());//reemplaza a bodyParser!!

// Routes
app.use("/api/tasks", require('./routes/task.routes'));

//Static files
app.use(express.static(path.join(__dirname, 'public')));

// Start server
app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
});