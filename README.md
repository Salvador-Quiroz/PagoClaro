# PagoClaro

**Pagos digitales que se adaptan al día a día de los negocios mexicanos.**

PagoClaro se dirige a negocios con modelos de operación diversos: ventas presenciales, cobro por mensaje, transferencias, terminales, redes sociales y comercio electrónico. Muchos comerciantes y clientes ya combinan canales y métodos digitales; el producto debe ampliar sus opciones y reducir fricción operativa, sin asumir que necesitan aprender desde cero ni sustituir lo que ya funciona.

La primera experiencia permitirá crear un cobro y compartir una liga o QR por el canal que el negocio elija. Quien necesite una integración o conciliación más avanzada podrá adoptarla después. La guía será útil y opcional, y el comercio conservará el control de cómo cobra.

> Estado: etapa de cimientos y descubrimiento. El repositorio documenta visión, evidencia, alcance, riesgos y arquitectura propuesta. Todavía no procesa pagos y no declara certificación, autorización regulatoria ni cumplimiento de PCI DSS.

## La oportunidad

Los Censos Económicos 2024 registraron 5,468,180 unidades económicas del sector privado y empresas paraestatales, con referencia a 2023. El 64.3% operaba en condiciones de informalidad. En 2023, 1,266,352 unidades reportaron utilizar al menos una herramienta de tecnología digital. La proporción que realizó ventas por internet fue 5.6% en total y 4.4% entre micro unidades, frente a 3.0% y 2.1%, respectivamente, en 2018.

La ENIF 2024 encontró que el efectivo seguía siendo el medio más frecuente para compras menores y mayores a 500 pesos, mientras crecían tarjetas y transferencias. Entre 2021 y 2024, el uso de aplicaciones móviles para movimientos financieros aumentó de 54.3% a 69.1% entre personas con cuenta formal. La lectura para PagoClaro es que el mercado usa una mezcla creciente de canales y métodos: el producto debe interoperar, dar elección y hacer más fácil la operación; no presentar a comercios o clientes como atrasados.

La respuesta de producto será acompañamiento, opciones, transparencia y confianza: empezar por el canal existente del comercio; explicar requisitos, comisiones y estados con claridad; y permitir que el negocio adopte funcionalidades cuando esté listo.

Lee la [investigación de mercado mexicana](docs/research/mexico-market.md) y la [comparación de pasarelas](docs/research/provider-benchmark.md).

## Visión

Que los pequeños negocios de México puedan aceptar y administrar pagos digitales diversos con claridad, por sus canales habituales y con herramientas que respondan a la manera en que cada negocio opera.

## Principios de producto

- Acompañar al comercio desde su práctica actual, con configuración guiada y atención comprensible.
- Convivir con el efectivo y los pagos presenciales; ampliar opciones sin estigmatizar preferencias.
- Comenzar con enlaces compartibles y cobro por QR; añadir integraciones cuando respondan a demanda real.
- Explicar importe, comisiones, método, estado, vencimiento, reembolso y siguiente paso.
- Diseñar para teléfonos y conexiones variados, distintas preferencias y niveles de familiaridad con cada producto, y tecnologías de asistencia.
- Minimizar datos y evitar almacenar números de tarjeta o códigos de seguridad.
- Confirmar el pago desde eventos confiables del proveedor, no desde la redirección del navegador.
- Medir adopción, éxito operativo y confianza, no solo registros o clics.
- Mantener elección transparente de métodos; cualquier orden dinámico deberá ser explicable y no discriminatorio.

## Experiencia inicial objetivo

1. El comercio entiende qué necesita para registrarse y quién procesa/liquida sus pagos.
2. Crea un cobro con concepto, monto y vigencia.
3. Comparte una liga por WhatsApp, redes, correo o SMS, o genera un QR para mostrar en persona.
4. El cliente abre una página rápida y accesible en español y elige entre los métodos disponibles para ese comercio.
5. PagoClaro comunica claramente si el pago está pendiente, confirmado, vencido o fallido.
6. El comercio consulta el historial, los cargos aplicados y la información necesaria para conciliar.

## Alcance y límites iniciales

La hipótesis de primera versión es integrar proveedores de pago existentes mediante contratos modulares. El proveedor contratado procesaría el método y liquidaría los fondos de acuerdo con sus condiciones. PagoClaro no mantendría saldos de clientes ni procesaría directamente datos de tarjeta en el MVP. Esta hipótesis necesita revisión legal y contractual en México antes de operar: la clasificación depende del papel real de PagoClaro, los contratos y el flujo de fondos.

Los métodos posibles pueden incluir tarjetas, transferencia SPEI, pago en efectivo en establecimientos, wallets y QR, sujetos a disponibilidad de proveedores, elegibilidad del comercio, certificaciones y obligaciones aplicables. CoDi no se promete como integración inmediata; Banco de México define un proceso de registro y certificación para desarrolladores de software de cobro.

## Ruta de entrega

- Etapa 0: investigación, entrevistas, definición del modelo operativo, análisis legal especializado y decisiones técnicas.
- Etapa 1: vertical funcional en sandbox con un proveedor, liga de pago, checkout alojado, estados asíncronos y panel básico.
- Etapa 2: piloto consentido con perfiles diversos de micro y pequeños comercios, acompañamiento y conciliación.
- Etapa 3: ampliar proveedores, métodos y canales según evidencia y habilitación legal/operativa.

Consulta el [alcance del MVP](docs/product/mvp-scope.md) y el [roadmap](docs/roadmap.md).

## Documentación

- [Visión y principios](docs/product/vision.md)
- [Perfiles y recorridos](docs/product/personas-and-journeys.md)
- [Alcance del MVP](docs/product/mvp-scope.md)
- [Estrategia de adopción](docs/product/adoption-playbook.md)
- [Accesibilidad](docs/product/accessibility.md)
- [Modelo de precios y economía unitaria](docs/product/pricing-and-unit-economics.md)
- [Mercado mexicano y fuentes](docs/research/mexico-market.md)
- [Registro de fuentes](docs/research/source-register.md)
- [Benchmark de proveedores](docs/research/provider-benchmark.md)
- [Mapa regulatorio y administrativo](docs/regulatory/mexico-readiness.md)
- [Arquitectura del sistema](docs/architecture/system-overview.md)
- [Modelo de pagos](docs/architecture/payment-domain.md)
- [Estructura del repositorio](docs/architecture/repository-structure.md)
- [Plantilla ADR](docs/architecture/adr-template.md)
- [Fundamentos de seguridad y privacidad](docs/security/security-foundation.md)
- [Operación y preparación del piloto](docs/operations/operating-readiness.md)
- [Hoja de ruta](docs/roadmap.md)
- [Qué mantener público o privado](docs/governance/publication-boundaries.md)
- [Mapa de avances y capacidades](docs/governance/capability-map.md)
- [Glosario](docs/glossary.md)

## Licencia y colaboración

El software y la documentación de este repositorio se publican bajo Apache-2.0, salvo que una carpeta o archivo indique expresamente otro término. La licencia del código no otorga derecho de uso de marcas ni reemplaza los términos del servicio alojado, acuerdos con proveedores, avisos de privacidad o contratos con comercios.

Consulta [CONTRIBUTING.md](CONTRIBUTING.md), [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md), [SECURITY.md](SECURITY.md) y [SUPPORT.md](SUPPORT.md).

PagoClaro es un proyecto de software en etapa inicial. La documentación describe hipótesis y requisitos de trabajo; no constituye asesoría legal, oferta de servicios financieros ni garantía de disponibilidad de un método de pago.
