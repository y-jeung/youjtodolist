exports.get = (key) => {
    let config = require('./dev.json');
    if (process.env.NODE_ENV === 'production') {
        config = require('./prod.json');
    }
    return config[key];
}