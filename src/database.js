const mongoose = require('mongoose');

const URL = process.env.MONGOOSE_URL

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database is connected');
});
