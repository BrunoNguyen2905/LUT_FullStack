const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const session = require("express-session");

//Connect to Database
mongoose.connect(config.database);

//on Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database' + config.database)
})
//on Error
mongoose.connection.on('error', (err) => {
    console.log('Database error' + err)
})

const app = express();

const users = require('./routes/users');

// CORS Middleware => allow to make request API from a different domain name. By default, it will get blocked if they try to do certain request
app.use(cors());

// Body Parser Middleware
// app.use(bodyParser.json());
// Body Parser Middleware handle URL encoded data
app.use(express.json()); //allow to handle raw JSON
app.use(express.urlencoded({ extended: false })); //handle form submission

// Passport Middleware
app.use(session({
    secret: config.secret,
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport)
app.use('/users', users);

//Index Route
app.get('/', (req, res)=> {
    res.send('Invalid endpoint');
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });
  
// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//Port number
const port = 3000;

// Start Server
app.listen(port, () => {
    console.log('Server started on port '+port);
  });