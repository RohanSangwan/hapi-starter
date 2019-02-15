const controllers = require('../controllers');
const { auth } = require('../utils/auth');
const path = require('path');
const scriptName = path.basename(__filename);

module.exports = [
    { method: 'POST', path: '/register', handler: controllers[scriptName]['register'] },
    {
        method: 'GET', path: '/user/{id}', handler: (request, reply) => {
            return auth(request, reply, scriptName, 'getUser');
        }
    }
];