const express = require('express');
const {create, findById, findByEmail, list, remove, update} = require('../controllers/employee.controller')
const employeeRoutes = express.Router();

employeeRoutes.get('/list', list);
employeeRoutes.post('/add', create);
employeeRoutes.get('/findById/:id', findById);
employeeRoutes.get('/findByEmail/:email',findByEmail);
employeeRoutes.put('/update', update);
employeeRoutes.delete('/delete', remove);


module.exports = employeeRoutes;
