const db = require('../data/db-config');

module.exports = {
    getResources,
    addResources
};

function getResources() {
    return db('resources');
}

function addResources(resource) {
    return db('resources').insert(resource);
}