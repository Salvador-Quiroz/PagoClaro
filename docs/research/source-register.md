# Registro de fuentes

Fuentes revisadas el 29 de octubre de 2026 para iniciar el análisis. Volver a comprobar antes de tomar decisiones regulatorias, de integración, precio o producción, porque normas, productos y APIs cambian.

## Mercado e inclusión

| Fuente | Uso en el proyecto | Nota de fecha y alcance |
| --- | --- | --- |
| [INEGI, Censos Económicos 2024: minimonografía nacional](https://www.inegi.org.mx/contenidos/programas/ce/2024/doc/ce2024_mn00.pdf) | Tamaño de unidades, digitalización, ventas por internet y cifras de informalidad. | Resultados con datos de referencia 2023; archivo corregido el 05-09-2025. |
| [INEGI y CNBV, ENIF 2024, comunicado 49/25](https://inegi.org.mx/contenidos/saladeprensa/boletines/2025/enif/ENIF2024_CP.pdf) | Productos financieros, uso de pagos, efectivo, transferencias, CoDi y canales digitales. | Publicado el 13-03-2025; encuesta levantada en 2024. |

## Marco mexicano

| Fuente | Uso en el proyecto | Nota |
| --- | --- | --- |
| [CNBV, participantes en redes de medios de disposición: preguntas frecuentes](https://www.cnbv.gob.mx/SECTORES-SUPERVISADOS/PARTICIPANTES_EN_REDES_DE_MEDIOS_DE_DISPOSICI%C3%93N/Paginas/PreguntasFrecuentes.aspx) | Roles en redes de tarjeta y definición de agregador. | Fuente institucional; confirmar disposiciones vigentes con especialista. |
| [Ley para Regular las Instituciones de Tecnología Financiera](https://www.diputados.gob.mx/LeyesBiblio/pdf/LRITF.pdf) | Analizar hipótesis de custodia y fondos de pago electrónico. | PDF consultado indica última reforma DOF 14-11-2025. |
| [LFPDPPP](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf) | Tratamiento de datos, aviso, consentimiento, derechos y seguridad. | PDF consultado indica última reforma DOF 14-11-2025. |
| [Banxico, Circular 14/2017 y disposiciones SPEI](https://www.banxico.org.mx/marco-normativo/normativa-emitida-por-el-banco-de-mexico/circular-14-2017/sistema-pagos-spei-disposicio.html) | Participación, marco de operación y experiencia móvil para transferencias. | La página lista Circular 9/2026, publicada 17-06-2026, y guía móvil v1.1 del 28-08-2026. |
| [Banxico, registro/certificación CoDi para software de cobro](https://www.banxico.org.mx/sistemas-de-pago/d/%7BA21AA19F-C855-9E64-98A4-832D9A51B2B0%7D.pdf) | Entender roles de tercero desarrollador, participante SPEI y comercio. | Documento oficial de proceso; verificar con Banxico antes de solicitar integración. |
| [Profeco, recomendaciones de compras por internet](https://www.gob.mx/profeco/documentos/compras-por-internet-recomendaciones) | Lista inicial de información al consumidor que tiendas virtuales deben mostrar. | Fuente de orientación; delimitar responsabilidades entre comercio, proveedor y PagoClaro. |

## Proveedores

| Fuente | Uso en el proyecto |
| --- | --- |
| [Mercado Pago: crear orden en Checkout API](https://www.mercadopago.com.mx/developers/es/reference/online-payments/checkout-api/create-order/post) | Idempotencia, respuestas HTTP, límites y errores de API. |
| [Conekta: cargos en efectivo y webhooks](https://developers.conekta.com/docs/cargo-unico-efectivo) | Estados asíncronos y eventos obligatorios para actualizar órdenes. |
| [Conekta: autenticación de webhooks](https://developers.conekta.com/docs/autenticaci%C3%B3n-webhooks) | Verificación de integridad de notificaciones. |
| [Openpay: referencia API](https://documents.openpay.mx/docs/api/index.html) | Sandbox/producción, claves, recursos, HTTPS y webhooks. |
| [Stripe: Checkout México](https://stripe.com/mx/payments/checkout) | Checkout alojado, enlaces, métodos locales y documentación de experiencia. |

## Estándares técnicos

| Fuente | Uso |
| --- | --- |
| [PCI SSC, document library](https://www.pcisecuritystandards.org/document_library/) | PCI DSS 4.0.1 y materiales de alcance. |
| [W3C, WCAG 2.2](https://www.w3.org/TR/WCAG/) | Requisitos de accesibilidad para checkout y panel. |
| [OWASP ASVS 5.0.0](https://asvs.owasp.org/) | Requisitos de verificación de seguridad de aplicaciones. |
| [OWASP API Security Top 10](https://owasp.org/API-Security/) | Amenazas comunes de APIs. |

## Protocolo de actualización

Cada documento de investigación registra fecha de consulta, afirmación, fuente y límite. Para pagos, regulación, estándares, precios y productos, confirmar la página oficial vigente al tomar una decisión. Mantener copia o hash solo si está permitido y es necesario; no republicar documentación protegida.
