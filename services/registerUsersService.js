const { Usuario, Rol } = require('../models');
const bcrypt = require('bcrypt');

// Validaciones
function validarCorreo(correo) {
  return /^[a-zA-Z0-9._%+-]+@(gmail|hotmail|outlook)\.com$/.test(correo);
}

function validarContrasena(contrasena) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(contrasena);
}

async function registrarUsuario(data, nombreRol) {
  const { nombre, correo, contrasena, telefono = '', identificacion = '' } = data;

  if (!nombre || !correo || !contrasena) {
    throw new Error('Nombre, correo y contraseña son obligatorios');
  }

  if (!validarCorreo(correo)) throw new Error('Correo inválido');
  if (!validarContrasena(contrasena)) throw new Error('Contraseña débil');

  const yaExiste = await Usuario.findOne({ where: { correo } });
  if (yaExiste) throw new Error('Este correo ya está registrado');

  const rol = await Rol.findOne({ where: { nombre: nombreRol } });
  if (!rol) throw new Error('Rol no válido');

  const contrasenaHash = await bcrypt.hash(contrasena, 10);

  await Usuario.create({
    nombre,
    correo,
    identificacion,
    contrasena: contrasenaHash,
    telefono,
    rolId: rol.id
  });

  return `Usuario registrado exitosamente como ${nombreRol}`;
}

module.exports = {
  registrarUsuario
};
