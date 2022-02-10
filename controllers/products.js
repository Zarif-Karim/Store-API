const Product = require('../models/products');

const get_all_products = async (req,res) => {
    console.log(req.query);
    const queryObject = {};
    const {
        name,
        price,
        rating,
        featured,
        company,
        sort,
        fields
    } = req.query;

    if(name) queryObject.name = {$regex: name, $options: 'i'};
    if(price) queryObject.price = Number(price);
    if(rating) queryObject.rating = Number(rating);
    if(featured) queryObject.featured = featured === 'true' ? true : false;
    if(company) queryObject.company = {$regex: company, $options: 'i'};
    
    let products = Product.find(queryObject);
    
    if(sort) {
        const sortQuery = sort.split(',').join(' ');
        products = products.sort(sortQuery);
    }
    if(fields){
        const fieldsQuery = fields.split(',').join(' ');
        products = products.select(fieldsQuery);
    }

    const limit = Number(req.query.limit) || 10;
    const page = Number(req.query.page) || 1;
    const skip = (page - 1) * limit;

    products = products.limit(limit).skip(skip);
    
    products = await products;
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
