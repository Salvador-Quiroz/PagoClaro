# Avances del proyecto y qué puede preparar Codex

Este mapa separa trabajo que puedo desarrollar en el repositorio de decisiones o acciones que corresponden al fundador, proveedores, comercios o especialistas.

| Etapa | Estado | Qué puedo entregar | Qué necesita apoyo externo |
| --- | --- | --- | --- |
| 0. Cimientos | Iniciado | Investigación pública, visión, alcance, benchmark, arquitectura inicial, seguridad, accesibilidad, licencia y roadmap. | Revisión del fundador; los documentos no son dictamen legal. |
| 1. Descubrimiento | Siguiente | Historias de usuario, flujos, criterios, API spec, wireframes, modelo de datos y backlog priorizado. | Acceso a comercios/clientes para entrevistas y decisiones de producto. |
| 2. Base ejecutable | Después de especificar | Apps, dominio de pagos, autenticación/autorización, persistencia, auditoría, API y configuración local. | Acordar stack y aceptar el alcance técnico. |
| 3. Primer flujo en sandbox | Después de escoger proveedor | Adapter, creación de cobro, checkout, estados asíncronos, webhooks, idempotencia y conciliación de prueba. | Cuenta sandbox. Las credenciales se guardan localmente; nunca en el chat o en un commit. |
| 4. Herramientas de comercio | Iterativa | Checkout accesible, enlaces/QR, historial, dashboard, ayuda e integraciones posteriores. | Feedback de comercios, marca y reglas comerciales. |
| 5. Piloto y calidad productiva | Antes de producción | Plan de pruebas, observabilidad, threat model, revisión de accesibilidad, runbooks y backups. | Infraestructura, comercios piloto y autorizaciones; puedo ejecutar verificaciones técnicas cuando me lo pidas. |
| 6. Salida comercial | Tras aprobaciones | Paquete de despliegue, checklist de salida, soporte y material para comercios. | Entidad, contratos, cuenta/proveedor, revisión legal mexicana, alcance PCI y aprobación de producción. |

## Decisiones que no debo inventar

Quién firma con comercios y proveedores; si PagoClaro será software, agregador u otra figura; tarifas, liquidación y actividades permitidas; aprobación de comercios; licencias o certificaciones; datos reales y consentimientos; compromisos de soporte.

Puedo investigar opciones y recomendar con evidencia. El fundador y los especialistas formalizan las decisiones.

## Pedidos concretos que puedes hacer

- “Convierte el MVP en historias de usuario, flujos y criterios de aceptación.”
- “Diseña el contrato del API de cobros y el modelo de estados antes de programarlo.”
- “Compara proveedores para el piloto con tarifas y documentación vigentes.”
- “Implementa la base modular de API y dominio con ejemplos sintéticos.”
- “Construye el enlace de pago y panel para crear, compartir y conciliar cobros.”
- “Integra el proveedor elegido en sandbox; guíame para configurar las credenciales localmente.”
- “Prepara una demo y un guion para patrocinadores.”
- “Revisa accesibilidad, seguridad o calidad del flujo y reporta hallazgos.”
- “Actualiza el expediente regulatorio con fuentes mexicanas y preguntas para un abogado.”

## Orden recomendado

1. Convertir la visión en requisitos y criterios medibles.
2. Elegir y documentar stack y modelo de datos.
3. Entrevistar comercios sobre canales, métodos, fricciones y costos.
4. Elegir un proveedor con sandbox y confirmar elegibilidad/contrato.
5. Construir un recorrido completo en sandbox.
6. Pilotear, corregir y preparar decisiones legales, de seguridad y operación.

No hace falta completar toda la capa comercial para diseñar software, pero el flujo de fondos y el proveedor sí deben estar definidos antes de aceptar pagos reales.
