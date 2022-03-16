const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const ConnectToMongoDb = require('./Database/Database');
ConnectToMongoDb();
// const cors = require('cors');
const app = express();

// app.use(cors())
app.use(express.json());       


app.use('/api/v1/ProductApi',  require('./Routes/ProductRoutes'));
app.use('/api/v1/OrganizationApi',  require('./Routes/OrganizationAccountRoutes'));

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});