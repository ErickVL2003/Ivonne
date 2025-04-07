const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Configurar middleware para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Manejar todas las rutas para SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
