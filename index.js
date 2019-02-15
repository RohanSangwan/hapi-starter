const Hapi = require('hapi');
var router = require('./routes');

const app = Hapi.server({
    host: process.env.host || 'localhost',
    port: process.env.port || 8000,
    routes: { cors: true }
});

app.route(router);

app.route({
    method: ['GET', 'POST'],
    path: '/{any*}',
    handler: function (request, h) {
        return h.file('./public/final.html');
    }
});

const start = async () => {
    await app.register(require('inert'));
    try {
        await app.start();
        console.log('Server is running at ' + app.info.uri);
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
}

start();