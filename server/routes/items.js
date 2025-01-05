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
router.get('/items', async(req, res) =>{
    try{
        const items = await Item.find();
        res.status(200).json(items);
    } catch(error){
        res.status(500).json({ error: 'Failed to get items'});
    }
});


//Patch item to be claimed
router.patch('claimItem/:itemId', async(req, res) =>{
    try {
        const {itemID} = req.params;
        const {userID} = req.body;
        
        const item = await Item.findById(itemId);
        if(!item) {
            return res.status(404).json({ error: 'Could not find item'});
        }

        if(item.claimed) {
            return res.status(400).json({ error: 'Item has been claimed already'});
        }

        item.claimed = true;
        await item.save();
        const user = await User.findbyId(userId);
        if (user) {
            user.postedItems.push(itemId);
            await user.save();
        }
        resizeTo.status(200).json(item);
    } catch(error) {
        res.status(500).json({ error: 'Item claim Failed'})
    }
});

//Put item when item is updated (only by user who created it)

//Delete item (only by user who created it), and call patch on user


//1 week deleting items (happens automatically), and call patch on user