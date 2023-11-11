const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const http = require('http');
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const personaRoutes = require('./routes/persona.routes');
app.use('/api/persona', personaRoutes);

app.get('*', (req, res) => res.status(200).send({
    message: 'Bienvenido a tu simple API con NodeJS y Express'
}));

const port = 8080;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);

module.exports = app;
