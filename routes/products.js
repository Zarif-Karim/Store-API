const express = require('express');
const router = express.Router();
const {
    get_all_products,
    add_product,
    get_product,
    update_product,
    delete_product
} = require('../controllers/products');


router.route('/').get(get_all_products).post(add_product);
router.route('/:id').get(get_product).patch(update_product).delete(delete_product);

module.exports = router;