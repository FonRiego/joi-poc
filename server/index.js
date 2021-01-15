const express = require("express");
const cors = require('cors')
const app = express();

app.use(cors())

// Routes
const examplesRoutes = require('./routes');
app.use('/examples', examplesRoutes);

app.get('/', function (req, res) {
  res.send('Respuesta de un get a /');
});

app.listen(3000, () => {
  console.log("El servidor está inicializado en el puerto 3000");
});