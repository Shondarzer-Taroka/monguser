
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Make sure this file exists

// Define routes
router.post('/users', userController.createUser);      // POST route to create a user
router.get('/users', userController.getUsers);      // POST route to create a user
router.get('/users/:id', userController.getUserById);  // GET route to get a user by ID
router.put('/users/:id', userController.updateUser);   // PUT route to update a user by ID
router.delete('/users/:id', userController.deleteUser);// DELETE route to delete a user by ID

module.exports = router;
