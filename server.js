const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});

//Define routes
const itemRouter = require('./routes/items');
app.use('/items', itemRouter);

const userRouter = require('./routes/users');
app.use('/users', userRouter);

// Start listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

