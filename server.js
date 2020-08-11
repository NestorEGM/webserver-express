const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/public`));

// Express HBS engine
hbs.registerPartials(`${__dirname}/views/partials`);
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'nESTOR eNRIQUE gARCIA mARTINEZ',
    anio: new Date().getFullYear(),
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    anio: new Date().getFullYear(),
  });
});

app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});