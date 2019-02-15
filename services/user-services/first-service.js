

const test = () => {
    return new Promise((resolve, reject) => {
        return resolve({ message: 'Success' });
    });
}

module.exports = {
    test,
};