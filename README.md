# Imaginautak
Creación y gestión de API propia


## Tecnologías del proyecto
- Proyecto de BackEnd con metodología MVP (modelo vista controlador) con rutas
- Dos archivos por cada ruta y controlador: archivo para funciones de JavaScript y otro para render de API
- Base de Datos con MySQL, utilizando el programa workbench
- Proyecto dockerizado con Docker
- Librerías utilizadas: nodemon, bcrypt, express, jsonwebtoken, dotenv, mysql2 y sequelize
- Gestión de errores genéricos en utils


## PUESTA EN MARCHA
Para poner en marcha este proyecto, sigue los siguientes pasos:

### .ENV
Para que el proyecto sea funcional en tu ordenador, completa los datos solicitados en el .env.example y elimina el .example. ¡Ahora debería funcionar! Datos en el interior del .env:

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
Este comando lee el package-json e instala todas las librerías que necesitamos para poner el proyecto en marcha. Una vez ejecutado el comando, guarda un archivo .js para que se actualice la consola y aparezca la frase: "Conexión con MYSQL hecha". ¡Ahora ya puedes utilizar el proyecto con normalidad!