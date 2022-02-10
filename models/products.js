const { Double } = require('bson');
const mongoose = require('mongoose');

const product_schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name property is not specified']
    },
    price: {
        type: Number,
        required: [true, 'price property is not specified']
    },
    featured : {
        type: Boolean,
        default: false
    },
    rating : {
        type: Double,
        default: 4.5,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message: '{VALUE} is not supported'
        }
    }
})

module.exports = mongoose.model('Product',product_schema);