# Curso

## ¿Qué es el testing? [resumen]

En el mundo actual las tecnologías con las que vivimos necesitan código, esto ha hecho que el desarrollo de software se haya vuelto industrial, donde contamos con procesos y herramientas, como el testing, que nos permiten entregar mas rápido proyectos de calidad a nuestros clientes reduciendo el riesgo de errores en producción.

### ¿Por que hacer testing?

Normalmente hay cuatro fases en el desarrollo de software para crear un producto:

**Diseño ⇒ Desarrollo ⇒ Pruebas ⇒ Producción**

En estas fases, detectar un error se vuelve cada vez mas costoso. Ahi es donde hacemos tecnicas para prevenir estas situaciones. El testing es la manera en la que nosotros gestionamos el riesgo y tratamos de evitar, en la medida de lo posible, los errores en el sistema.

#### Gestionar riesgos como Google

Análisis de código estático: Mientras desarrollamos vamos viendo nuestros resultados.
Pruebas unitarias: Nos aseguramos que el código funciona como queremos.
Pruebas de integración: Verificar que varios elementos funcionan bien trabajando juntos.
Revision de código: Equipo o persona encargada de revisar el código de las demás personas.
QA: Equipos de creación de pruebas automáticas o manuales.

## Pirámide de testing [resumen]

### La pirámide clásica del testing: _(de menos a más costoso y tendría que haber más pruebas de las primeras que de las últimas)_

- unit tests
- integration tests
- end to end tests (e2e)
- ui test: emulan el dispositivo físico

![p1](./assets/p1.jpg)
![p2](./assets/p2.jpg)
![p3](./assets/p3.jpg)
![p4](./assets/p4.jpg)

En algunas empresas se puede llegar a encontrar la pirámide invertida, un anti-patron.

![p5](./assets/p5.jpg)

### Trofeo de tests: _(En javascript se recomienda en vez la pirámide usar un formato de trofeo)_

- static tests: el tronco (el segundo mayor número de pruebas)
- unit tests: mismo num. de pruebas que e2e y menos que static e integration
- integration tests: el mayor número de pruebas debe ser aquí
- e2e tests: mismo tamaño que unit tests y menos que static e integration

![p6](./assets/p6.jpg)

## Deuda Técnica [resumen]

Igual que en las finanzas, las deudas no son buenas ni malas, solo son una estrategia para alcanzar algo y luego se paga.

Haciendo pruebas se maneja el **riesgo**

![p7](./assets/p7.jpg)

El momento y pruebas dependen de la fase en la que se encuentra la compañía:

![p8](./assets/p8.jpg)

- Tracción
- Inflexión
- Escala
- Expansión

La deuda de deficiencia del desarrollador puede ser alta porque en la fase de **tracción**, la compañía busca **_(velocidad > precisión)_** , de modo que en esta etapa el testing no se valora, ya que buscan lanzar, lanzar, lanzar…

Cuando se entra a la fase de **inflexión**, hay más usuarios y se empiezan a escribir más pruebas, curando la deuda.

## Herramientas de Testing [resumen]

Estas herramientas mencionadas están clasificadas según el tipo o nivel de pruebas a realizar.

### Multipropósito o Robustas

Pueden ejecutar la mayoría de pruebas de la pirámide o trofeo, tanto para backend, frontend, integration test, algunas hasta UI y API s testing.
_Jest, *Chai, Mocha, Ava, Jasmine *_

### UI Testing

Pruebas desplegadas en un dispositivo real o simulado bajo un Browser (navegador) automatizando toques y gestos en la aplicación.
_Playwright, * Cypress, WebdriverIO, Puppeteer*_

### API Testing

En general, las APIs no tienen UI, usan protocolos de servicios por peticiones.
_Supertest, Dredd, Postman_

### Pruebas Estáticas

Estas pruebas no ejecutan el código, estas herramientas se integran al editor de código y van analizando si hay alguna mala práctica.
_ESLint, Prettier, Typescript tools (TSLint)_

**_Todas estas herramientas manejan una sola estructura (de forma), de modo que el lenguaje o framework pasa a un segundo plano_**.
