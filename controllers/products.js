const { query } = require('express');
const Product = require('../models/products');

const get_all_products = async (req,res) => {
    const queryObject = {};
    const {
        name,
        price,
        rating,
        featured,
        company
    } = req.query;

    if(name) queryObject.name = name;
    if(price) queryObject.price = Number(price);
    if(rating) queryObject.rating = Number(rating);
    if(featured) queryObject.featured = featured === 'true' ? true : false;
    if(company) queryObject.company = company;

    const products = await Product.find(queryObject);
    res.status(200).json({ 
        request: "all products", 
        query: req.query,
        nHits: products.length,
        products 
    });
}

const add_product = async (req,res) => {
    const data = req.body;
    res.status(200).json({ request : "add product", data });
}

const get_product = async (req,res) => {
    const {id} = req.params;
    res.status(200).json({ request : "get product", id });
}
const update_product = async (req,res) => {
    const {id} = req.params;
    res.status(200).json({ request : "update product", id });
}
const delete_product = async (req,res) => {
    const {id} = req.params;
    res.status(200).json({ request : "delete product", id });
}



module.exports = {
    get_all_products,
    add_product,
    get_product,
    update_product,
    delete_product
};
