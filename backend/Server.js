const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const ConnectToMongoDb = require('./Database/Database');
ConnectToMongoDb();
const app = express();
const Product = require('./Routes/ProductRoutes');

app.use(express.json());    


app.use('api/v1/ProductApi', Product);
app.listen(process.env.PORT, () => {
    console.log('Server is running on port 5000');
});