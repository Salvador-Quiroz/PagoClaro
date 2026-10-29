# Fundamentos de seguridad y privacidad

## Objetivo de seguridad

Proteger fondos en tránsito a través de proveedores, cuentas de comercios, datos personales, integridad de estados y continuidad operativa. Un mensaje de interfaz nunca debe ser más fuerte que la evidencia disponible.

## Datos y minimización

Antes de implementar, crear un inventario con finalidad, responsable/encargado, clasificación, origen, destino, retención y eliminación. Mantener fuera de PagoClaro PAN, CVV, PIN, contraseñas bancarias y credenciales de proveedor visibles al navegador. Guardar solo lo necesario para identificar comercio, operación, contacto y evidencia operativa. Evitar datos sensibles en logs, analytics, URLs y tickets.

## Controles base

- TLS en tránsito y cifrado en almacenamiento administrado.
- Gestor de secretos; credenciales separadas por entorno y rotables.
- Autenticación robusta para usuarios de comercio y administración.
- Autorización por comercio, rol y acción en cada endpoint, no solo en la interfaz.
- Protección de sesión, CSRF cuando aplique, rate limits, límites de cuerpo y validación.
- Firmas de webhook, protección anti-replay, deduplicación e idempotencia.
- Registro de auditoría de cambios de configuración, reembolsos y acceso de soporte.
- Mascaramiento de datos, expiración y controles para exportación y borrado.
- Escaneo de dependencias, inventario/SBOM y proceso de respuesta a CVE antes de producción.
- Separación real de sandbox y producción; no datos de producción en desarrollo.
- Copias de seguridad cifradas y ejercicios de restauración.

## Marcos de referencia

- PCI DSS v4.0.1, con alcance definido por arquitectura/proveedor y profesional calificado.
- OWASP ASVS 5.0.0 para verificar controles de aplicación y API.
- OWASP API Security Top 10 para autorización por objeto, autenticación, exposición y consumo de servicios.
- WCAG 2.2 nivel AA como objetivo de checkout y panel.
- LFPDPPP vigente, con revisión de aviso, finalidades, derechos, transferencias y retención.

Fuentes: [PCI SSC](https://www.pcisecuritystandards.org/document_library/), [OWASP ASVS](https://asvs.owasp.org/), [OWASP API Top 10](https://owasp.org/API-Security/), [W3C WCAG 2.2](https://www.w3.org/TR/WCAG/), [LFPDPPP](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf).

## Threat model inicial

- Suplantación de identidad del comercio o cliente.
- Robo y abuso de credenciales o sesiones.
- Acceso cruzado a datos de otros comercios.
- Webhook falsificado, repetido, tardío, fuera de orden o con cuerpo malicioso.
- Cobro duplicado por timeout/reintento.
- Manipulación de montos, moneda, retorno o referencia.
- SSRF o consumo inseguro de API externa.
- Extracción de datos desde logs, soporte, analytics o backups.
- Fraude, abuso promocional, contracargos y cuentas mula.
- Dependencia de proveedor, interrupción, abuso de cuotas o caída prolongada.
- Ingeniería social al comercio y personal de soporte.

Este listado guía el descubrimiento y no sustituye pruebas profesionales de seguridad ni la evaluación de fraude del proveedor.
