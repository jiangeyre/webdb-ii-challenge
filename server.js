const express = require('express');
const helmet = require('helmet');
const carsRouter = require('./cars/cars-router.js');
const logger = require('./middleware/logger');

const server = express();

server.use(helmet());
server.use(express.json());

server.use(logger);
server.use('/api/cars', carsRouter);
server.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        message: "Something is wrong. Please check the code."
    });
});

server.get('/', (req, res) => {
    return res.send('<h1>You have loaded into the server!</h1>')
});