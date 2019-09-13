const express = require('express');
const server = express();

const ProjectRouter = require('./items/projects/project-router.js')

server.use(express.json());

server.use('/api/projects', ProjectRouter)

server.get('/', (req, res) => {
    res.send({ message: 'api up...' })
})

module.exports = server;