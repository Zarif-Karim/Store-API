require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const connectDB = require('./database/connect');
const not_found = require('./middleware/not_found');
const error_handler = require('./middleware/error_handler');

const products_router = require('./routes/products');
//middleware
app.use(express.json());
// app.use(express.static('./static'));

//routes
app.get('/',(req,res)=>{
    console.log(req.url);
    res.send('<h1>Welcome to Store Api</h1>');
});

app.use('/api/v1/products', products_router);

app.use(not_found);
app.use(error_handler);

const start = async () => {
    try{
        //connect DB
        await connectDB(process.env.MONGO_URI).then(console.log('Database Connected'));
        app.listen(process.env.PORT, ()=>console.log(`http://localhost:${process.env.PORT}`));
    } catch (error) {
        console.log(error);
    }
}

start();