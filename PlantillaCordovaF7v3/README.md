# Plantilla Cordova F7 V.3

Plantilla Cordova F7 V.3 Creado Por Ing. Pedag. Henry Giovanny Gonzalez

Pasos para Iniciar a desarrollar

1. Clonar este proyecto git.

Recuerde que debe estar ubicado en la carpeta del proyecto /PlantillaCordovaF7v3, por la terminal para poder ejecutar los siguientes comandos:

2. Descargar las dependencias de NodeJs:
	npm install

3. Luego de descargar las dependencias, se inicia el servidor de NodeJs:
	npm run serve

Pasos para compilar en Android

1. Agregar la plataforma android
	cordova platform add android

2. Verficar si cumple los requisitos de compilación
	cordova requirements android

2. Compilar y arrancar la app por el dispositivo conectado
	cordova run android