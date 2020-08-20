# Cine APP

Aplicación para reservar boletos de cine
## Dependencias
* Node JS v12.13.1
* MongoDB v4.0.8

## Intrucciones de instalación
Crear el archivo ```.env``` en la raíz del proyecto completar los datos requeridos, basados en el archivo ```.env.example```
```
HOST=<<host>>
PORT=<<puerto>>
TMDB_KEY=<<token de acceso a TMDB>>
```
Ejecutar los siguientes comandos
```
npm install
npm run build
npm run start
```
o
```
yarn
yarn build
yarn start
```