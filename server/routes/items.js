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
router.patch('/claimItem', async (req, res) => {
    try {
        const {userId, itemId} = req.body;
        const user = await User.findbyId(userId);
        if (!user){return res.status(404).json({ error: 'User not found' });}
        user.postedItems.push(itemId);
        const updatedUser = await user.save();
        res.status(200).json(updatedUser);
    } catch  (error) {
        res.status(500).json({ error: 'Failed to update user\'s items' });
    }
});

//Put item when item is updated (only by user who created it)

//Delete item (only by user who created it), and call patch on user


//1 week deleting items (happens automatically), and call patch on user