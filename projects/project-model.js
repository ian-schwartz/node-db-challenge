const db = require('../data/db-config');

module.exports = {
    getProjects,
    addProjects,
    getTasks,
    addTasks,
    findById
};

function getProjects() {
    return db('projects');
}

function addProjects(project) {
    return db('projects').insert(project);
}

function getTasks(id) {
    return db.select('projects.name', 'projects.description', 'tasks.description', 'tasks.notes', 'tasks.completed', 'tasks.project_id')
             .from('projects')
             .join('tasks', 'tasks.project_id', 'projects.id' )
             .where({ project_id: id })
}

function addTasks(id, task) {
    return db('tasks')
            .insert(task)
            .where({ project_id: id })
}

function findById(id) {
    return db('tasks')
      .where({ id })
      .first();
}

