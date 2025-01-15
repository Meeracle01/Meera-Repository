const express = require('express');
const router = express.Router();
const serviceController = require('../Controllers/serviceController');

// POST /services - Create a new service
router.post('/', serviceController.createService);

// GET /services - Get all services
router.get('/', serviceController.getAllServices);

// PUT /services/:id - Update a service by ID
router.put('/:id', serviceController.updateService);

// DELETE /services/:id - Delete a service by ID
router.delete('/:id', serviceController.deleteService);

module.exports = router;
