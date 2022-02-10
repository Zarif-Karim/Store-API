
const get_all_products = async (req,res) => {
    const products = [{id: 1, name: "dummy Product"},{id: 2, name: "dummy Product2"}];
    res.status(200).json({ request : "all products", products });
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
