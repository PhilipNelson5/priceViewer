const express = require('express');
const app = express();
const port = 3000;

// MIDDLE WARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
const pricesRoute = require('./routes/prices.js');

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/prices', pricesRoute);

app.listen(port, () => console.log(`Server listening on localhost:${port}!`));
