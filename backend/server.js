// username : mzmlnwz3
// password : mongodbpass
// Insomnia password : 12345678



const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;



app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open',() =>{
    console.log("MongoDB database connection established successfully");
})


const exercisesRouters = require('./routes/exercises');
const usersRouters = require('./routes/users');


app.use('/exercises',exercisesRouters);
app.use('/users',usersRouters);

app.listen(port,() =>{
    console.log('Server is running on port: ${port} ');
});