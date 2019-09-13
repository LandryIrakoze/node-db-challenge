// const server = require('./api/server');

// const PORT = process.env.PORT || 4000;

// server.listen(PORT, () => {
//     console.log(`\n** Running on ${PORT} **\n`)
// })

const express = require('express');
const server = express();

const ProjectRouter = require('./items/projects/project-router.js');
const ResourceRouter = require('./items/resources/resource-router.js');

server.use(express.json());

server.use('/api/projects', ProjectRouter);
server.use('/api/resources', ResourceRouter);


server.get('/', (req, res) => {
    res.send({ message: 'api up...' })
})

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
    console.log(`\n** Running on ${PORT} **\n`)
})

module.exports = server;