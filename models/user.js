const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { 
        type: String, 
        required: true
    },
    lastName: { 
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    //Passcode is stored as a hash in database. 
    //The client side will convert it to a hash
    passcode: { 
        type: String, 
        required: true
    },
    postedItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    }]
});

//Presaving hashing function
userSchema.pre('save', async function (next) {
    if (!this.isModified('passcode')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.passcode = await bcrypt.hash(this.passcode, salt);
        next();
    } catch (error) {
        next(error);
    }
});


const User = mongoose.model('User', userSchema);

module.exports = User;