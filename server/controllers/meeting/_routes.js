const express = require('express');
const meetingController = require('./meeting');
const router = express.Router();

// Add a new meeting
router.post('/add', meetingController.add);

// Get all meetings
router.get('/', meetingController.index);

// Get a single meeting by ID
router.get('/view/:id', meetingController.view);

// Soft delete a meeting by ID
router.delete('/delete/:id', meetingController.deleteData);

// Soft delete multiple meetings by IDs
router.post('/deleteMany', meetingController.deleteMany);
module.exports = router