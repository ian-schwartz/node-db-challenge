const express = require('express');

const Projects = require('./project-model');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProjects()
    .then(projects => res.json(projects))
    .catch(() => res.status(500).json({ message: 'Failed to get projects' }));
})

router.post('/', (req, res) => {
    projectData = req.body;

    Projects.addProjects(projectData)
    .then(projects => res.status(201).json(projects))
    .catch(() => res.status(500).json({ message: 'Failed to post projects' }));
})

router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;
    
    Projects.getTasks(id)
    .then(task => {
        if (task) {
          res.status(200).json(task);
        } else {
          res.status(404).json({ message: 'Could not find task' })
        }
      })
      .catch(() => res.status(500).json({ message: 'Failed to get task' }));
});

router.post('/:id/tasks', (req, res) => {
    const { id } = req.params;
    const taskData = req.body;

    Projects.findById(id)
    .then(task => {
      if (task) {
        Projects.addTasks(taskData, id)
        .then(tasks => {
          res.status(201).json(tasks);
        })
      } else {
        res.status(404).json({ message: 'Could not find task with given id.' })
      }
    })
    .catch (() => res.status(500).json({ message: 'Failed to create new step' }));
});


module.exports = router;