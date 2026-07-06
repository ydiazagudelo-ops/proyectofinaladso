const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/userController');

// Definir la ruta POST para crear usuarios
router.post('/users', createUser);

module.exports = router;