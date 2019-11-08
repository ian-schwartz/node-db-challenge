const express = require('express');

const Resources = require('./resource-model');

const router = express.Router();

router.get('/', (req, res) => {
    Resources.getResources()
    .then(resources => res.json(resources))
    .catch(() => res.status(500).json({ message: 'Failed to get resources' }));
})

router.post('/', (req, res) => {
    resourceData = req.body;

    Resources.addResources(resourceData)
    .then(resources => res.status(201).json(resources))
    .catch(() => res.status(500).json({ message: 'Failed to post resources' }));
})

module.exports = router;