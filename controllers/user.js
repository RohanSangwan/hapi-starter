const services = require('../services/user-services');

const register = (request, reply) => {
    let body;
    try {
        body = JSON.parse(request.payload);
    }
    catch (err) {
        body = request.payload;
    }
    return reply.response(body);
}

const getUser = async (request, reply) => {
    return services['first-service.js']['test']().then(data => {
        return reply.response(data);
    }).catch(err => {
        return reply.response(err).code(404);
    });
}

module.exports = {
    register,
    getUser
};