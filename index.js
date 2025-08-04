require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./models');
const rutaRouter = require('./routes/rutaRouter');
const registerRouter = require('./routes/registerRouter');
const paraderoRouter = require('./routes/paraderoRouter');
const empresaRouter = require('./routes/empresaRouter');
const rolRouter = require('./routes/rolRouter');
const loginRouter = require('./routes/loginRouter');
const usuarioRouter = require('./routes/usuarioRouter');
app.use(cors());
app.use(express.json());

app.use('/api/rutas', rutaRouter);
app.use('/api/register', registerRouter);
app.use('/api/paraderos', paraderoRouter);
app.use('/api/empresas', empresaRouter);
app.use('/api/roles', rolRouter);
app.use('/api/login', loginRouter);
app.use('/api/usuarios', usuarioRouter);

db.sequelize.sync().then(() => {
  console.log('Base de datos sincronizada');
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
});
