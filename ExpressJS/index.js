const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const members = require('./Members');
const logger = require('./middleware/logger');

const app = express();  

// Init middleware
// app.use(logger);

//Handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Body Parser Middleware handle URL encoded data
app.use(express.json()); //allow to handle raw JSON
app.use(express.urlencoded({ extended: false })); //handle form submission

// Homepage Route
app.get('/', (req, res) =>
  res.render('index', {
    title: 'Member App',
    members
  })
);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Members API route
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));