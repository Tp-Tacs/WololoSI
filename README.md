# WololoSI

Servidor intermedio entre el backend y frontend de Wololo

### Scripts

-   `npm run startdev` para correr el servidor en modo dev.

    -   Permite dejar corriendo el server mientras se hacen cambios. Al guardar se re-ejecuta automaticamente.

-   `npm run start` transpila el codigo typescript a js (ver `build`) y arranca el server.

-   `npm run build` transpila el codigo typescript a js en el directorio "dist".

-   `npm run clean` borra el directorio "dist" con los .js previamente buildeados.

Docker
```
$ docker build -t wololo-si . && docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 8082:8082 -e CHOKIDAR_USEPOLLING=true wololo-si
```
