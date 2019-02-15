const fs = require('fs');

let services = {};

fs.readdirSync(__dirname)
    .filter(file => file != 'index.js')
    .forEach(file => {
        services[`${file}`] = require(`./${file}`);
    });

module.exports = services;