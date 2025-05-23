# IMAGINAUTAK

Proyecto individual de backend que funciona como red social para artistas emergentes de diversas disciplinas y amantes del arte que quieren descubrir nuevos proyectos y artistas. Inspirado en la asociación [Imaginautak](https://www.instagram.com/imaginautak/), que junta una vez al mes en Bilbao diez personas que muestran sus creaciones y pasión por el arte.

## Requisitos
- Node.js
- Express
- Sequelize
- API
- Mínimo de 4 tablas
- Manejo de usuarios
- Sesiones con encriptación JWT

## Tecnologías utilizadas:
- Proyecto de BackEnd con metodología MC (modelo controlador) con rutas
- Dos archivos por cada ruta y controlador: archivo para funciones de JavaScript y otro para render de API
- CRUD por cada modelo (tabla principal)
- Base de Datos con MySQL, utilizando el programa workbench
- Proyecto dockerizado con Docker
- Librerías utilizadas: nodemon, bcrypt, express, jsonwebtoken, dotenv, mysql2 y sequelize
- Gestión de errores genéricos en utils
- Uso de Postman para verificar los endpoints
- Hasheado de contraseñas


## Tablas:
>- **Principales**: User, Artist, Fan, Project y Category
>- **Intermedias**: Artist_has_project, Fan_favorites_project, Fan_follows_artist y Project_has_category


## Relaciones de las tablas
>- User - Artist (1:1)
>- User - Fan (1:1)
>- Artist - Project (N:M) → artist_has_project
>- Fan - Project (N:M) → fan_favorites_project
>- Fan - Artist (N:M) → fan_follows_artist
>- Project - Category (N:M) → project_has_category




---


## PUESTA EN MARCHA
Para poner en marcha este proyecto, sigue los siguientes pasos:

### .env
Para que el proyecto sea funcional en tu ordenador, completa los datos solicitados en el .env.example y elimina el .example. Datos en el interior del .env:

```
DB_ROOT_PASSWORD=
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=

APP_PORT=
APP_HOST=
```

### docker compose
Pon a funcionar la BBDD. Para ello, en la consola ejecuta el siguiente comando:
```
docker compose up --build
```
Este comando lee el package-json e instala todas las librerías que necesitamos para poner el proyecto en marcha. Una vez ejecutado el comando, guarda un archivo .js para que se actualice la consola y aparezca la frase: "Conexión con MYSQL hecha".


### localhost
Utiliza en tu navegador la ruta:
```
http://localhost:3000
```
o el puerto que hayas especificado en tu .env, seguido de alguno de los siguientes endpoints:


### Endpoints
**AUTH**
- POST → <ins>/registro</ins>
- POST → <ins>/login</ins>

**USER**
- GET por nombre → <ins>/usuario/nombredeusuario/:username</ins> (solo si has iniciado sesión)
- DELETE → <ins>/usuario/:id/eliminar</ins> (solo si eres el USER en cuestión o ADMIN)
- GET por id → <ins>/usuario/:id</ins> (solo si has iniciado sesión)
- PUT editar → <ins>/usuario/:id</ins> (solo si eres el USER en cuestión)

**ARTIST**
- GET todos → <ins>/artistas/</ins> (puedes acceder sin haber iniciado sesión)
- POST crear → <ins>/artistas/</ins> (solo si has iniciado sesión)
- GET por nombre → <ins>/artistas/nombre/:artistic_name</ins> (puedes acceder sin haber iniciado sesión)
- DELETE → <ins>/artistas/:id/eliminar</ins> (solo si eres el ARTIST en cuestión o ADMIN)
- GET por id → <ins>/artistas/:id</ins> (puedes acceder sin haber iniciado sesión)
- PUT editar → <ins>/artistas/:id</ins> (solo si eres el ARTIST en cuestión)

**FAN**
- POST crear → <ins>/fan/</ins> (solo si has iniciado sesión)
- DELETE → <ins>/fan/:id/eliminar</ins> (solo si eres FAN o ADMIN)
- GET por id → <ins>/fan/:id</ins> (solo si has iniciado sesión)
- PUT editar → <ins>/fan/:id</ins> (solo si eres el FAN en cuestión)

**PROJECT**
- GET todos → <ins>/proyectos/</ins> (puedes acceder sin haber iniciado sesión)
- POST crear → <ins>/proyectos/</ins> (solo si eres ARTIST)
- GET por nombre → <ins>/proyectos/titulo/:title</ins> (puedes acceder sin haber iniciado sesión)
- DELETE → <ins>/proyectos/:id/eliminar</ins> (solo si eres el ARTIST en cuestión o ADMIN)
- GET por id → <ins>/proyectos/:id</ins> (puedes acceder sin haber iniciado sesión)
- PUT editar → <ins>/proyectos/:id</ins> (solo si eres el ARTIST en cuestión)

**CATEGORY**
- GET todos → <ins>/categorias/</ins> (puedes acceder sin haber iniciado sesión)
- POST crear → <ins>/categorias/</ins> (solo si eres ADMIN)
- GET por nombre → <ins>/proyectos/titulo/:title</ins> (puedes acceder sin haber iniciado sesión)
- DELETE → <ins>/categorias/:id/eliminar</ins> (solo si eres ADMIN)
- GET por id → <ins>/categorias/:id</ins> (puedes acceder sin haber iniciado sesión)
- PUT editar → <ins>/categorias/:id</ins> (solo si eres ADMIN)