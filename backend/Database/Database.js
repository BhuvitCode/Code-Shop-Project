const moongose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
MongoDbConnectionString="mongodb://localhost:27017/E-Shop?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
const ConnectToMongoDb = ()=>{
    moongose.connect(MongoDbConnectionString,()=>{
        console.log("Connected to mongo");
    })
}

module.exports = ConnectToMongoDb;