// routes/index.js
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/api/v1/users');

router.get('/api/v1/users', usersController.getUsers);
router.get('/api/v1/users/:id', usersController.getUserById);
router.post('/api/v1/users', usersController.createUser);
router.put('/api/v1/users/:id', usersController.updateUser);
router.delete('/api/v1/users/:id', usersController.deleteUser);

module.exports = router;
