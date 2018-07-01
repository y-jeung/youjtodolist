
const mongoose = require('mongoose');
const config = require('config');
mongoose.Promise = global.Promise;

const DB_ID = config.get('DB_ID');
const DB_PW = config.get('DB_PW');
const DB_NAME = config.get('DB_NAME');
exports.connect = () => {
    return new Promise((resolve, reject) => {
    mongoose.connect(`mongodb://${DB_ID}:${DB_PW}@ds221631.mlab.com:21631/${DB_NAME}`)
    const connection = mongoose.connection;
    connection.on('error', reject);
    connection.once('open', resolve);
        
    });
}