const server = require('./server');

const Host = process.env.HOST || 'localhost';
const Port = process.env.PORT || 8000;

server.listen(Host, Port, () => {
    console.log(`\n ** Running on port: ${Port}... ** \n`);
});