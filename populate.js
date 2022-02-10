require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./database/connect');
const productModel = require('./models/products');

const productList = require('./products.json');

const initiate = async () => {
    try{
        //connect to DB
        await connectDB(process.env.MONGO_URI).then(console.log('Connected to DB'));

        // delete all previous products : fresh start
        await productModel.deleteMany();
        console.log('Deleted all Products'); //empty filter

        //add new list of products
        await productModel.create(productList);
        console.log('Created List of Products');
    } catch (error) {
        console.log(error);
    }
};

initiate();