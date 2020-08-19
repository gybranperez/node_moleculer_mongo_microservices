# Moleculer Microservicios con adaptador de Mongoose y Typescript 


## Table of contents

1. [Instalación](#installation)
2. [Configuración](#configuration)
3. [Launching Server](#launching)

## Installation

Clona este repo y ejecuta

```
$ npm install
```

## Configuration

La configuración se ubica en la carpeta .env. 
Este archivo se pasa a Moleculer runner cuando se levanta el servidor
Para más información revise la documentación de [Broker](https://moleculer.services/docs/0.13/broker.html)
donde podrá ver todas las opciones de configuración.

## Launching

Para ejecutar el proyecgo utilice el comando:

```
$ npm start
```

This will launch all Microservices located in src/services in `http://localhost:8000/` (APIGATEWAY_PORT) and Nats server in `http://localhost:422` ( TRANSPORTER_OPTIONS_URL ). Check [Transporters](https://moleculer.services/docs/0.12/transporters.html) for further reference.

Api Gateway path is`/api/`, so you can access all examples using `http://localhost:8000/api/microserviceName`. 


## Architecture

### Server ( `src/services` )

- `apiGateway.ts` Api Gateway Microservice.

- `helloWorld.service.ts` Hello World Microservice.

- `posts.service.ts` Posts Microservice.


### Env ( `src/env` )

- `.env.dev` .Env configuration file for development.

## License

MIT
