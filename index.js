require ('dotenv').config();

const express = require('express');
const allRoutes = require('./routes/index');
const connectToDb = require('./db/databaseConection');

const app = express();
connectToDb
app.use(express.json());

app.use('/api/em', allRoutes);


app.listen(process.env.PORT,()=>{
    console.log(`This server is listening on port ${process.env.PORT}`);
})
 