const express = require('express');
const cors = require('cors');


const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api/notes', require('./routes/notes'));
app.use('/api/users', require('./routes/users'));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/calendar", require("./routes/calendar"));


module.exports = app;