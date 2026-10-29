# Modelo de dominio de pagos

## Entidades principales

- **Merchant:** entidad comercial, configuración, estado y relación con uno o más proveedores.
- **PaymentRequest:** petición legible de cobro creada por el comercio; incluye concepto, importe, vigencia y referencia interna.
- **PaymentAttempt:** intento concreto, método elegido y operación externa asociada.
- **PaymentEvent:** observación inmutable de un cambio comunicado por un proveedor o proceso interno.
- **ProviderAccount:** conexión configurada con el proveedor; credenciales secretas no se guardan en el objeto de dominio.
- **Refund:** devolución completa o parcial cuando el método/proveedor lo permite.
- **SettlementRecord:** reporte de fondos liquidados, comisiones y referencias; no es un saldo de cliente.

## Estados normalizados propuestos

- created: petición local creada, sin checkout generado.
- pending: cliente puede actuar o el método requiere pago posterior.
- processing: proveedor reporta procesamiento.
- succeeded: proveedor confirma éxito conforme al contrato.
- failed: intento terminal fallido; conservar causa no sensible.
- canceled: operación cancelada por acción permitida.
- expired: venció sin pago confirmado.
- partially_refunded: parte del importe fue devuelta.
- refunded: importe devuelto conforme al proveedor.

El modelo debe guardar estado nativo del proveedor y una traducción normalizada. No todo método comparte el mismo ciclo; efectivo y transferencias pueden permanecer pendientes y confirmar después. Rechazos, devoluciones y ajustes se modelan como eventos, no como sobrescritura destructiva del historial.

## Transiciones

Una transición valida estado actual, origen, identidad de comercio, importe, moneda y referencia externa. Eventos repetidos no repiten efecto; eventos fuera de orden se registran y concilian en vez de aplicarse a ciegas. Reversiones o ajustes requieren eventos nuevos y permisos explícitos.

## Dinero

- Representar MXN en centavos como entero; validar límites y montos positivos.
- Mantener moneda en cada operación; no asumir MXN en entidades compartidas.
- Separar importe del comercio, cargos del proveedor, cargos de PagoClaro, impuestos y neto liquidado.
- No calcular neto usando estimaciones cuando tarifa o liquidación real no están confirmadas.

## Idempotencia

La clave identifica comercio, operación y endpoint. Guardar huella del request y respuesta original. Reutilizar una clave con cuerpo distinto debe fallar. Documentar retención según proveedor y riesgo. Todas las llamadas con efecto externo deben usar capacidad de idempotencia correspondiente y reconciliar resultado desconocido.

## Webhooks

Persistir recepción antes de procesar. Validar firma según proveedor sobre el cuerpo original cuando sea requerido, autenticidad, timestamp y ventana anti-replay. Deduplicar por ID de evento y por operación. Responder al proveedor de forma rápida después de aceptar evento; ejecutar efectos secundarios en segundo plano. Mantener reintentos, errores, correlación y herramienta de reproceso restringida.

## Historial

Los eventos relevantes son append-only desde el punto de vista operacional; las correcciones se añaden como eventos de compensación. Evitar almacenar cuerpos completos de webhook indefinidamente. Redactar datos personales y secretos, con retención establecida por necesidad y obligación.
