# Alcance propuesto del MVP

## Objetivo

Validar si un comercio pequeño puede registrarse, crear y compartir un cobro digital y reconocer su estado confirmado con menos coordinación manual. El MVP no probará un sistema financiero propio ni una cobertura total de métodos.

## Incluido en el primer piloto

- Perfil básico del comercio y estado de elegibilidad del proveedor.
- Creación de cobro con concepto, monto en MXN, vigencia y referencia interna.
- Enlace alojado, compartible desde teléfono; QR como representación de ese enlace.
- Checkout en español, responsive, accesible y de bajo peso.
- Un proveedor externo inicialmente, en sandbox y después en piloto autorizado.
- Adapter de proveedor para evitar acoplar el dominio a la API de una sola compañía.
- Estados created, pending, processing, succeeded, failed, canceled y expired.
- Confirmación asíncrona vía webhook validado y consulta/reconciliación con proveedor.
- Idempotencia de creación y procesamiento de eventos.
- Historial básico y filtros por estado y fecha.
- Transparencia de monto, cargo aplicable, método y referencia de liquidación disponible.
- Registro de auditoría para cambios administrativos relevantes.
- Soporte de primer uso para comercios participantes.

## Aplazado hasta validar necesidad y obligaciones

- Custodiar fondos, operar saldos o hacer dispersión propia.
- Ser participante directo de SPEI o adquirente de tarjetas.
- Capturar o almacenar número de tarjeta o CVV en PagoClaro.
- Marketplace con subcomercios o liquidación dividida.
- Suscripciones, crédito, meses sin intereses o pagos transfronterizos.
- Reglas de optimización basadas en IA.
- CoDi como compromiso del primer lanzamiento; exige confirmar registro, certificación y participación permitida.
- Aplicaciones nativas, caja física/terminal, pagos offline y hardware.
- Contabilidad, facturación CFDI o manejo fiscal del comercio.
- Integraciones simultáneas con muchos proveedores.

## Criterios de aceptación del piloto

- Un participante puede completar alta y crear un cobro con asistencia documentada.
- Reintentar una solicitud no duplica el cobro.
- Una redirección de cliente nunca basta por sí sola para marcar un pago exitoso.
- Un webhook inválido no cambia el estado; duplicados no repiten efectos.
- Pagos pendientes, vencidos, fallidos y confirmados se presentan de forma diferenciada.
- El negocio puede relacionar el cobro con su venta y entender el costo conocido.
- La página soporta teclado, ampliación de texto, lector de pantalla y errores anunciados; se valida contra WCAG 2.2 AA.
- El piloto registra errores y soporte sin guardar datos de tarjeta.
- El comercio, proveedor y especialistas revisan flujo contractual, privacidad, seguridad y responsabilidades antes de producción.

Los umbrales numéricos de conversión, disponibilidad y tiempos se fijarán después de medir una línea base y acordar el alcance operativo.
