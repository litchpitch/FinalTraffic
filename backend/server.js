const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const challanRoutes = require('./routes/challanRoutes');


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/challans', challanRoutes);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
})
.catch(err => {
    console.error('MongoDB connection error is:', err);
});
