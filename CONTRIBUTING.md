# Contribuir a PagoClaro

Gracias por ayudar a construir infraestructura de pagos más accesible para negocios mexicanos. Queremos cambios comprensibles, revisables y alineados con seguridad, privacidad y operación real.

## Antes de proponer cambios

- Lee el README y los documentos de producto, arquitectura y seguridad relacionados.
- Para cambios grandes, abre primero una discusión o issue con problema, usuarios afectados, opciones y riesgos.
- No incluyas datos personales, datos reales de pago, secretos, credenciales, registros de clientes ni capturas identificables.
- No copies código, diseños, documentación propietaria ni marcas de terceros. Las comparaciones deben basarse en fuentes públicas y citarlas.
- No anuncies disponibilidad, certificación, cumplimiento o compatibilidad de un proveedor sin evidencia y aprobación correspondiente.

## Flujo de contribución

1. Abre un issue describiendo el problema y el resultado esperado.
2. Propón cambios enfocados en una rama de trabajo.
3. Explica el impacto en producto, datos, seguridad, accesibilidad y operación.
4. Actualiza la documentación que permita revisar la decisión y sus limitaciones.
5. Solicita revisión antes de integrar cambios que afecten pagos, privacidad, permisos o seguridad.

El repositorio aún no tiene runtime ni configuración de pruebas. La estrategia de herramientas, pruebas, revisión estática y despliegue se definirá como parte de la primera decisión de implementación, antes de añadir servicios ejecutables.

## Criterios de aceptación para cambios futuros

- El importe monetario se maneja sin punto flotante binario.
- Los flujos que cambian estado son idempotentes o detectan reintentos.
- Los pagos asíncronos se confirman con evidencia del proveedor.
- El procesamiento de webhooks es verificable, repetible e idempotente.
- Los errores comunican acciones útiles sin exponer secretos o datos sensibles.
- La experiencia puede completarse con teclado y tecnologías de asistencia.
- La documentación refleja los límites reales del cambio.

## Licencia

Al enviar una contribución intencionalmente para inclusión en PagoClaro, aceptas que se distribuya bajo Apache-2.0, salvo acuerdo escrito distinto.
