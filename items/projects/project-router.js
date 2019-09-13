const express = require('express');

const Projects = require('./project-model');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.find()
        .then(project => {
            res.json(project);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get Projects' });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Projects.findById(id)
        .then(project => {
            if (project) {
                res.json(project);
            } else {
                res.status(404).json({ message: 'Could not find project with given id.' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get Projects' });
        });
});

router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;
  
    Projects.findTasks(id)
        .then(steps => {
            if (steps.length) {
                res.json(steps);
            } else {
                res.status(404).json({ message: 'Could not find tasks for given project' })
            }
            })
            .catch(err => {
                res.status(500).json({ message: 'Failed to get tasks' });
            });
});

router.post('/', (req, res) => {
    const projectData = req.body;

    Projects.add(projectData)
        .then(project => {
            res.status(201).json(project);
        })
        .catch (err => {
            res.status(500).json({ message: 'Failed to create new project' });
        });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Projects.findById(id)
        .then(project => {
            if (project) {
                Projects.update(changes, id)
                .then(updatedproject => {
                    res.json(updatedproject);
                });
            } else {
                res.status(404).json({ message: 'Could not find project with given id' });
            }
        })
        .catch (err => {
            res.status(500).json({ message: 'Failed to update project' });
        });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Projects.remove(id)
        .then(deleted => {
            if (deleted) {
                res.json({ removed: deleted });
            } else {
                res.status(404).json({ message: 'Could not find project with given id' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to delete project' });
        });
});

module.exports = router;