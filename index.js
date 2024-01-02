require ('dotenv').config();

const express = require('express');
const allRoutes = require('./routes/index');
const employeeRoutes = require('./routes/employee.routes');

const app = express();

app.use(express.json());

app.use('/api/em', allRoutes);


app.listen(process.env.PORT,()=>{
    console.log(`This server is listening on port ${process.env.PORT}`);
})
 