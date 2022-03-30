// initialising libraries/framework to use
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/config');
require("colors");

// config dotenv
dotenv.config();

// mongodb connection
connectDB();

// creating rest object to use functionalities of express
const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));

// route
app.use('/api/pizzas', require('./routes/pizzaRoute'));
app.get('/', (req,res) => {
    res.send("<h1>Hello from Node Server via Nodemon</h1>");
});

// port
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running on ${process.env.NODE_ENV} mode on port number ${port}`.bgMagenta.white);
});
