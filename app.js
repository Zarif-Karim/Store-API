require('dotenv').config();

const express = require('express');
const app = express();

const not_found = require('./middleware/not_found');
const error_handler = require('./middleware/error_handler');

//middleware
app.use(express.json());
// app.use(express.static('./static'));

//routes
app.get('/',(req,res)=>{
    console.log(req.url);
    res.send('<h1>Welcome to Store Api</h1>');
})

app.use(not_found);
app.use(error_handler);

app.listen(process.env.PORT, ()=>console.log(`http://localhost:${process.env.PORT}`));