const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
//configure the dotenv
dotenv.config();
//Connect to db
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
  console.log('Connected to db');
})
//Middleware
app.use(express.json());



//Route Middleware
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute) //this means that everything in the authRoute will have a prefix of /api/user


app.listen(3000, () => console.log('App listening at port 3000'));