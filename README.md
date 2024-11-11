# Iris To Do Api

Aplicacion construida en Nodejs, TypeScript, Express, Sequalize y JWT. Se esta usando una base de datos de PosgreSQL alojada en el servicio [Neon](https://neon.tech). En caso de querer usar otro motor de base de datos se deben realizar los ajustes y cambiar las opciones de `dialect` por las del motor a usar, adjunto documentacion [Dialect-Specific Things](https://sequelize.org/docs/v6/other-topics/dialect-specific-things/).

⚠️**Nota**: 

- Es posible que al intentar hacer una peticion pueda retornar un error `500`. Al ser un servidor gratuido, este se suspende cuando no tiene request por algun tiempo. de esta manera ahorra recursos. Intenta hacer nuevamente un request para  solucionar el problema. Deberia demorar pocos segundos en reestablecer la conexion con el servidor.

- Los Endpoints estan protegidos por autenticacion tipo `Bearer` token se genera consumiendo el endpoint `api/v1/auth/token` por medio de una peticion `POST`. El cuerpo de la solicitud debe ser:

  ```json
   {
    "username": "",
    "password": ""
   }
   ```


## Ejecutar de manera local:
En caso de que se requiera probar ambos servicios de manera local, adjunto los pasos a seguir para ambos: 

  ```bash
   # Instalar dependencias
   npm install

   # Compilar el proyecto
   npm run build

   # Correr proyecto
   npm run start

   # En caso de que no se desee compilar, se puede ejecutar en modo desarrollo
   npm run dev
   ```

 crear un archivo .env en la raiz del proyecto  

    ```env
   DB_NAME     = ""
   DB_USERNAME = ""
   DB_PASSWORD = ""
   DB_HOST     = ""
   SERVER_PORT = 
   JWT_SECRET  = ""
   ```