const express = require('express');
const Item = require('../models/item');
const User = require('../models/user');
const router = express.Router();

//POST user

//PATCH user when new item is posted
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

//PATCH user when item is deleted (happens automatically or by user)

//PATCH user for passcode

//GET user (get array of items posted for item management)

//DELETE user? (optional)