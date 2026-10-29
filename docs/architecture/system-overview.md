# Visión de arquitectura

## Hipótesis arquitectónica

PagoClaro comenzará como una aplicación modular y desplegable de forma sencilla. El objetivo es separar responsabilidades mediante módulos y contratos, no desplegar numerosos servicios antes de tener volumen y experiencia operacional que los justifiquen.

## Dominios funcionales

- **Comercios y onboarding:** perfil, configuración, estado de elegibilidad y relación con proveedor.
- **Cobros:** petición de pago, concepto, importe, vencimiento y referencia externa.
- **Checkout:** experiencia alojada, métodos disponibles, idioma y accesibilidad.
- **Proveedores:** adapters que traducen el modelo de PagoClaro a la API externa y normalizan respuestas.
- **Eventos y webhooks:** recepción, autenticidad, idempotencia, persistencia, procesamiento y reintentos.
- **Conciliación:** comparación de cobros, cargos, comisiones, devoluciones y liquidaciones reportadas por proveedor.
- **Identidad y permisos:** acceso de usuario, comercio y soporte con aislamiento por tenant.
- **Auditoría y soporte:** acciones administrativas, cambios y diagnóstico sin exponer datos de tarjeta.
- **Notificaciones:** mensajes de estado que no revelan detalles sensibles y permiten comunicación clara.

## Flujo lógico

1. El comercio solicita un cobro a través del panel o API.
2. PagoClaro valida identidad, permisos, importe, moneda y configuración del proveedor.
3. El adapter crea la operación externa con clave idempotente.
4. El cliente es enviado a un checkout alojado o recibe un enlace seguro.
5. El proveedor envía un evento al inbox de webhooks.
6. El procesador valida firma y replay, deduplica y aplica una transición permitida.
7. El historial del comercio refleja estado y evidencia del proveedor.
8. La conciliación posterior compara operación y liquidación.

La redirección del cliente sirve para UX, no para confirmar dinero. Una consulta a la API del proveedor y el proceso de conciliación resuelven estados ambiguos.

## Límites de confianza

- Navegador/comercio no es confiable para declarar un pago.
- Webhook entrante requiere autenticidad, límites de tamaño, protección de replay y procesamiento idempotente.
- Credenciales privadas solo viven en backend y gestor de secretos.
- Datos de tarjeta permanecen en la frontera del proveedor.
- Cada operación está asociada a un comercio y a permisos verificados en servidor.
- El proveedor externo es dependencia operacional y de datos; sus límites y fallos se representan en el estado de PagoClaro.

## Datos fundamentales

- Importes como entero en unidad menor y moneda ISO 4217; nunca punto flotante binario.
- Tiempos almacenados en UTC y presentados según zona del usuario.
- Identidad interna propia; conservar identificador y estado externos por proveedor.
- Estados nativos del proveedor sin perder la traducción normalizada de PagoClaro.
- Eventos con clave única, fecha, versión y fuente.
- Logs correlacionables por request/payment/event ID, con datos sensibles eliminados o redactados.

## Persistencia y procesos asíncronos

La base transaccional debe ser fuente del estado interno. Si un cambio local necesita disparar una llamada externa o un mensaje, usar patrones idempotentes y una bandeja/outbox transaccional para evitar perder trabajo entre commit y envío. Reintentos deben ser acotados, observables y no duplicar efectos.

## Evolución

Mantener módulos y contratos lo bastante independientes para sustituir o añadir proveedores, habilitar más métodos, auditoría, reportes y API pública. No introducir microservicios, colas distribuidas, IA, almacenamientos múltiples o balances internos hasta contar con una necesidad y propietario operativo claros.
