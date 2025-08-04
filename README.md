# Sistema de Gestión de Rutas de Transporte

## Descripción
Sistema backend para la gestión de rutas de transporte, empresas, paraderos y usuarios con diferentes roles (administrador, usuario, conductor, despachador).

## Tecnologías Utilizadas
- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web
- **Sequelize** - ORM para base de datos
- **MySQL** - Base de datos
- **JWT** - Autenticación
- **bcrypt** - Encriptación de contraseñas

## Instalación

### Prerrequisitos
- Node.js (versión 14 o superior)
- MySQL
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone <tu-repositorio-url>
cd backend
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
cp env.example .env
```
Editar el archivo `.env` con tus credenciales de base de datos.

4. **Configurar la base de datos**
```bash
# Crear la base de datos en MySQL
mysql -u root -p
CREATE DATABASE nombre_de_tu_base_de_datos;
```

5. **Ejecutar migraciones**
```bash
npm run migrate
```

6. **Iniciar el servidor**
```bash
npm start
```

El servidor estará disponible en `http://localhost:3001`

## Estructura del Proyecto

```
backend/
├── config/          # Configuración de base de datos
├── controllers/     # Controladores de la API
├── middlewares/     # Middlewares de autenticación
├── migrations/      # Migraciones de base de datos
├── models/          # Modelos de Sequelize
├── routes/          # Rutas de la API
├── services/        # Lógica de negocio
└── seeders/         # Datos de prueba
```

## API Endpoints

### Autenticación
- `POST /api/login/login` - Iniciar sesión
- `POST /api/register/admin` - Registrar administrador
- `POST /api/register/usuario` - Registrar usuario normal

### Usuarios
- `GET /api/usuarios` - Listar usuarios (pendiente)

### Rutas
- `GET /api/rutas` - Listar rutas
- `POST /api/rutas` - Crear ruta
- `PUT /api/rutas/:id` - Actualizar ruta
- `DELETE /api/rutas/:id` - Eliminar ruta

### Empresas
- `GET /api/empresas` - Listar empresas
- `POST /api/empresas` - Crear empresa
- `PUT /api/empresas/:id` - Actualizar empresa
- `DELETE /api/empresas/:id` - Eliminar empresa

### Paraderos
- `GET /api/paraderos` - Listar paraderos
- `POST /api/paraderos` - Crear paradero
- `PUT /api/paraderos/:id` - Actualizar paradero
- `DELETE /api/paraderos/:id` - Eliminar paradero

## Roles de Usuario

- **Administrador**: Acceso completo al sistema
- **Usuario**: Acceso básico
- **Conductor**: Gestión de rutas asignadas
- **Despachador**: Gestión de paraderos

## Variables de Entorno

Crear un archivo `.env` con las siguientes variables:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_contraseña
DB_NAME=nombre_base_datos
DB_PORT=3306
JWT_SECRET=tu_clave_secreta
PORT=3001
NODE_ENV=development
```

## Scripts Disponibles

- `npm start` - Iniciar servidor en modo desarrollo
- `npm run migrate` - Ejecutar migraciones de base de datos

## Despliegue en Render

1. Conectar tu repositorio de GitHub a Render
2. Configurar las variables de entorno en Render
3. Usar el comando de build: `npm install`
4. Comando de inicio: `npm start`

## Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## Licencia

Este proyecto está bajo la Licencia ISC. 