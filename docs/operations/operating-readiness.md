# Preparación operativa

Una pasarela real necesita procesos humanos además de APIs. Cada proceso deberá tener responsable, horario, registro, criterio de escalamiento y evidencia.

## Antes de un piloto

- Acordar proveedor, sandbox, permisos, soporte técnico y escalamiento.
- Definir quién acepta comercios, revisa documentación y comunica rechazos.
- Preparar guía para primer cobro, pago pendiente, pago vencido y comprobante.
- Definir cómo revisar y conciliar montos, comisiones, netos y referencias del proveedor.
- Documentar qué se puede reembolsar, quién lo autoriza, plazos y forma de informar.
- Definir manejo de contracargos y evidencia requerida.
- Probar alertas para fallos de webhooks, retrasos del proveedor, tareas atascadas y divergencias.
- Acordar horario y canal de soporte del piloto; no anunciar SLA antes de tener capacidad.
- Preparar registro de incidentes, comunicación y continuidad.
- Entrenar participantes para no compartir códigos, capturas con datos ni credenciales.

## Señales de salud

- Tiempo desde creación hasta evento del proveedor.
- Webhooks aceptados, inválidos, repetidos, retrasados y fallidos.
- Operaciones con estado desconocido o divergencia de conciliación.
- Tasa de pagos confirmados, pendientes, fallidos, expirados y devueltos por método.
- Tiempo de soporte por primer pago y motivo de contacto.
- Disponibilidad del checkout y dependencias del proveedor.

## Reglas de comunicación al usuario

- No decir “pagado” sin confirmación confiable.
- Mostrar instrucciones y plazo para métodos asíncronos.
- Explicar qué hacer ante timeout sin sugerir reintentos ciegos.
- Aclarar quién recibe el dinero, quién procesa el pago y cómo contactar a cada entidad.
- Mostrar información de reembolso y disputa antes del piloto.
