# README - Proyecto Node.js con TypeScript, Firebase Functions, Mongoose y Express

Este repositorio contiene un proyecto desarrollado en Node.js utilizando TypeScript como lenguaje de programación principal, Firebase Functions para el alojamiento de las funciones, Mongoose como ODM (Object Data Modeling) para interactuar con una base de datos MongoDB, y Express para la creación de la API.

## Autor
El autor de este proyecto es Bairon Fernando Freire Otálvaro.
Email: bairon.f5@gmail.com
Teléfono: 322 5687135

## Descripción del Proyecto

Este proyecto es una aplicación backend que proporciona servicios API para interactuar con una base de datos MongoDB a través de Firebase Functions. La aplicación sigue los principios SOLID y está diseñada utilizando la arquitectura de adaptadores y puertos para mejorar la escalabilidad y mantenibilidad del código. Además, se ha implementado bajo la arquitectura de microservicios para modularizar y desacoplar las distintas funcionalidades, permitiendo un desarrollo, despliegue y escalado más eficiente y flexible.

## Tecnologías Utilizadas

- Node.js
- TypeScript
- Firebase Functions
- Mongoose
- Express

## Estructura del Proyecto

El proyecto sigue una estructura de carpetas que organiza el código de acuerdo a los diferentes componentes y responsabilidades:
- `functions/`: Esta es la carpeta principal del proyecto, que contiene todos los archivos y carpetas relacionados con las funciones y la lógica de la aplicación.
- `firebase.json`: Este archivo es una configuración para Firebase, una plataforma de desarrollo de aplicaciones móviles y web desarrollada por Google. El archivo firebase.json generalmente contiene configuraciones como las reglas de reescritura de URL, la configuración del hosting, entre otras configuraciones específicas de Firebase.
- `.firebaserc`: Este archivo es utilizado por Firebase CLI (Interfaz de línea de comandos) para mantener el contexto del proyecto. Puede contener información sobre el proyecto Firebase en el que estás trabajando, como el ID del proyecto.
- `.gitignore`:  Este archivo es utilizado por Git para especificar qué archivos y carpetas deben ignorarse al realizar un seguimiento de cambios en el repositorio. Esto puede incluir archivos generados automáticamente, archivos temporales, archivos de configuración local, etc.
  - `handlers`: Esta carpeta sirve como punto de entrada donde se realiza la inyección de dependencias. Aquí es donde se conectan los diferentes componentes de la aplicación, como los controladores de la API y los casos de uso, utilizando la inyección de dependencias.
  - `config`: Contiene la configuración de la aplicación.
  - `src/`: Esta carpeta contiene el código fuente de la aplicación. Se organiza en diferentes subcarpetas que representan diferentes partes de la arquitectura de la aplicación.
    - `application/`: Contiene la lógica de la aplicación organizada por casos de uso y puertos.
      - `ports/`:  Interfaces o contratos que definen las operaciones que deben ser proporcionadas por los adaptadores concretos.
      - `cases/`: Implementaciones concretas de casos de uso de la aplicación. 
    - `domain/`: Contiene los modelos de dominio y la lógica de negocio.
      - `models/`: Definiciones de objetos y estructuras de datos que representan conceptos del dominio de la aplicación.
      - `common/`: Funcionalidades comunes y utilidades relacionadas con el dominio de la aplicación.
    - `infraestructure/`: Contiene la implementación de la infraestructura, como servicios de API y bases de datos.
      - `api/`:  Implementación de la capa de API, con controladores, middleware y rutas.
        - `controllers/`: Controladores que manejan las solicitudes de la API.
        - `middleware/`: Funciones de middleware que se ejecutan antes o después de que se manejen las solicitudes.
        - `routes/`:  Definiciones de rutas de la API.
      - `db/`:  Implementación de la capa de acceso a datos, como conexiones a bases de datos.
    - `utils/`: Contiene funciones y utilidades reutilizables que pueden ser utilizadas en diferentes partes de la aplicación.

- `test/`: Contiene las pruebas unitarias para cada componente del proyecto.

## Instalación y Uso

1. Clona este repositorio.
2. Ingresa a la carpeta principal cd functions
3. Instala las dependencias utilizando npm: npm install
4. Configura las credenciales de firebase y MongoDB según sea necesario
5. Instala las herramientas de firebase npm: npm install --save-dev firebase-tools o npm install -g firebase-tools
6. Para ejecutar localmente: firebase serve 

## Principios SOLID
Este proyecto sigue los principios SOLID para asegurar que el código sea mantenible, escalable y fácil de entender.
- S - Single Responsibility Principle (Principio de Responsabilidad Única): Cada clase o módulo debe tener una única razón para cambiar.
- O - Open/Closed Principle (Principio Abierto/Cerrado): Las entidades de software (clases, módulos, funciones, etc.) deben estar abiertas para su extensión pero cerradas para su modificación.
- L - Liskov Substitution Principle (Principio de Sustitución de Liskov): Los objetos de un programa deberían ser sustituibles por instancias de sus subtipos sin alterar la corrección del programa.
- I - Interface Segregation Principle (Principio de Segregación de Interfaces): Es preferible tener muchas interfaces específicas que una única interfaz general.
- D - Dependency Inversion Principle (Principio de Inversión de Dependencias): Los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones.
