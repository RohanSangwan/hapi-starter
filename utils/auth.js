const controllers = require('../controllers');

/**
 * 
 * @param {*} req Request 
 * @param {*} rep Reply
 * @param {*} file Name of the controller file to call if authentication successfull.
 * @param {*} func Name of the controller function to call if authentication successfull.
 */
const auth = (req, rep, file, func) => {
    if (req.headers.authorization || req.headers.Authorization) {
        let token = req.headers.authorization ? req.headers.authorization : req.headers.Authorization;
        // Test your token here.
        if (token == 1) {
            // If authentication is successfull then call your controller for further process.
            return controllers[file][func](req, rep);
        }
        return rep.response({ msg: 'Token is not valid.' }).code(403);
    }
    return rep.response({ msg: 'Auth token not available.' }).code(403);
}

module.exports = {
    auth
}