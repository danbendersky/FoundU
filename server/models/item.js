const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: { 
        type: String, 
        required: true
    },
    locationDescription: { 
        type: String, 
        required: false
    },
    location: {
        type: String, 
        required: true
    },
    description: {
        type: String,
        required: false
    },
    image: {
        name: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
    },
    postedUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    postDate: {
        type: Date,
        default: Date.now
    },
    claimed: {
        type: Boolean,
        default: false
    }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;