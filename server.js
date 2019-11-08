const express = require('express');
const helmet = require('helmet');

const ResourceRouter = require('./resources/resource-router.js');
const ProjectRouter = require('./projects/project-router.js');

const server = express();

server.use(express.json());
server.use(helmet());

server.use('/api/resources', ResourceRouter);
server.use('/api/projects', ProjectRouter);

module.exports = server;