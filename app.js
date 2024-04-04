const express = require('express');
const app = express();
const PORT = 13401;

const clientes = ['Juan', 'Andres', 'David'];
const productos = ['Galletas', 'Inka Kola', 'Coca Cola'];

app.get('/', (req, res) => {
  res.send('¡Bienvenido a la aplicación Express!');
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
