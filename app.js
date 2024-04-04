const express = require('express');
const app = express();
const PORT = 13309;

const clientes = ['Dave', 'Alexander', 'Yeffer'];
const productos = ['Laptop', 'Mesa', 'Fideos'];

app.get('/', (req, res) => {
  res.send('¡Bienvenido a la aplicación Express Dave!');
});

app.get('/clientes', (req, res) => {
  res.json(clientes);
});

app.get('/productos', (req, res) => {
  res.json(productos);
});

app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
