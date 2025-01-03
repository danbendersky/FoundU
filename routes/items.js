const express = require('express');
const Item = require('../models/item');
const User = require('../models/user');
const router = express.Router();

//Post item
router.post('/postItem', async (req, res) => {
    try {
        const item = new Item(req.body);
        await item.save();
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create item' });
    }
});

//Get all items


//Patch item to be claimed

//Put item when item is updated (only by user who created it)

//Delete item (only by user who created it), and call patch on user


//1 week deleting items (happens automatically), and call patch on user