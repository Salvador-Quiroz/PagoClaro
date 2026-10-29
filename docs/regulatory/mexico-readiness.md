# Mapa legal y administrativo: México

**Documento de trabajo, no opinión legal.** El propósito es convertir incertidumbres en preguntas, evidencia y responsables antes de operar. La clasificación depende del flujo de dinero, contratos, funciones, publicidad, relación con comercios y datos tratados.

## 1. Definir el papel de PagoClaro

Antes de una integración productiva, diagramar quién recibe cada instrucción; quién autoriza el pago; quién tiene los fondos y por cuánto tiempo; quién liquida al comercio; quién define comisiones; quién resuelve devoluciones y contracargos; y quién conserva cada dato.

La CNBV describe participantes en redes de medios de disposición y define al agregador de pagos con tarjetas como quien, al amparo de un contrato de servicios con un adquirente, ofrece aceptación de pagos con tarjetas a receptores. La Ley Fintech regula actividades de ITF, incluidas instituciones de fondos de pago electrónico, cuando el modelo real entra en esa categoría. La primera ruta propuesta mantiene procesamiento y liquidación en proveedores contratados; asesores mexicanos deben evaluar si la implementación específica genera obligaciones de agregador, participante, tercero, ITF u otra figura.

Fuentes: [CNBV, preguntas sobre participantes en redes](https://www.cnbv.gob.mx/SECTORES-SUPERVISADOS/PARTICIPANTES_EN_REDES_DE_MEDIOS_DE_DISPOSICI%C3%93N/Paginas/PreguntasFrecuentes.aspx); [Ley para Regular las Instituciones de Tecnología Financiera, texto vigente](https://www.diputados.gob.mx/LeyesBiblio/pdf/LRITF.pdf).

## 2. SPEI, CoDi y otros métodos

Banco de México mantiene las reglas SPEI y registra modificaciones, incluida la Circular 9/2026 publicada en junio de 2026. La guía de experiencia móvil para transferencias tiene versión 1.1 publicada en agosto de 2026.

Para CoDi, la documentación de Banco de México distingue a participantes SPEI de terceros desarrolladores: el software que permite generar mensajes de cobro requiere registro y certificación; solo participantes SPEI ponen a disposición del público la funcionalidad de pago. Por tanto, cobro con QR, aceptación CoDi y transferencia SPEI no son términos intercambiables ni se reducen a generar una imagen QR.

Fuentes: [Banxico, marco normativo SPEI y versiones](https://www.banxico.org.mx/marco-normativo/normativa-emitida-por-el-banco-de-mexico/circular-14-2017/sistema-pagos-spei-disposicio.html); [Banxico, proceso de registro y certificación CoDi para cobro](https://www.banxico.org.mx/sistemas-de-pago/d/%7BA21AA19F-C855-9E64-98A4-832D9A51B2B0%7D.pdf).

## 3. Datos personales

La Ley Federal de Protección de Datos Personales en Posesión de los Particulares vigente fue reformada en noviembre de 2025. Antes de recopilar datos, documentar roles de responsable/encargado, finalidades, consentimiento, aviso de privacidad, derechos ARCO, acceso interno, encargados, transferencias, retención, eliminación y respuesta a incidentes. Recopilar solo lo necesario para el producto y proveedor.

Fuente: [LFPDPPP, texto vigente de la Cámara de Diputados](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf).

## 4. Comercio electrónico y protección al consumidor

Profeco señala elementos que la tienda virtual debe mostrar al consumidor, incluidos contacto, monto total, precios en moneda nacional, información del pago, aviso de privacidad y condiciones de cancelación. Debe aclararse contractualmente qué información y atención corresponden a PagoClaro, al proveedor de pago y al propio comercio. No asumir que una pasarela elimina obligaciones del vendedor.

Fuente: [Profeco, recomendaciones para compras por internet y monitoreo de tiendas virtuales](https://www.gob.mx/profeco/documentos/compras-por-internet-recomendaciones).

## 5. Tarjetas y PCI DSS

PCI DSS v4.0.1 es una referencia actual del PCI Security Standards Council. El diseño inicial evitará que PagoClaro reciba o almacene PAN/CVV y preferirá redirect o checkout alojado/componentes del proveedor. Esto puede limitar exposición, pero no permite declarar que PagoClaro queda automáticamente fuera del alcance; determinar alcance, cuestionario y responsabilidades con adquirente, proveedor y profesional PCI calificado antes de producción.

Fuente: [PCI SSC, biblioteca oficial de documentos](https://www.pcisecuritystandards.org/document_library/).

## 6. Asuntos corporativos, fiscales y administrativos

- Constituir y mantener la entidad adecuada, propiedad intelectual, poderes y cuentas; decisión con asesoría corporativa.
- Negociar contratos de proveedor/adquirente, SLA, tarifas, liquidación, soporte, datos y responsabilidades.
- Definir onboarding/KYB, actividades prohibidas, documentación y monitoreo; nunca evitar la debida diligencia del proveedor.
- Acordar facturación e impuestos de las comisiones y servicios de PagoClaro; no asumir que el producto facturará ventas del comercio.
- Preparar términos del servicio, contratos de comercio, avisos de privacidad, cancelaciones, reembolsos, disputas y atención de quejas.
- Evaluar obligaciones de prevención de lavado de dinero y financiamiento ilícito según actividades concretas y normativa vigente.
- Planear continuidad operativa, respuesta a incidentes, conservación de evidencia y canal de denuncias.

## Puertas de salida a producción

No aceptar dinero real hasta que exista: dictamen de alcance y roles; entidad y contratos; proveedor habilitado; evaluación PCI y de seguridad; avisos y términos revisados; proceso de atención de reembolsos/quejas; conciliación de prueba; evidencia de controles; y aprobación explícita del responsable del producto.
