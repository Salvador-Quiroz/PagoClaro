# Benchmark inicial de proveedores de pago

**Método:** revisión de documentación pública y páginas de producto al 29 de octubre de 2026. La tabla compara capacidades documentadas, no calidad de autorización, comisiones netas, soporte, acuerdos comerciales ni resultados internos. Esas variables requieren cotizaciones, sandbox y pruebas autorizadas.

| Proveedor | Patrones documentados | Lección para PagoClaro |
| --- | --- | --- |
| Mercado Pago | Checkout Pro y API de pagos; el endpoint de creación de órdenes requiere X-Idempotency-Key y documenta conflictos, cuotas y reintentos. | La idempotencia debe formar parte del contrato desde el primer día. |
| Conekta | Órdenes, checkout, métodos locales y webhooks; la guía indica que los webhooks mantienen actualizado el estado asíncrono y documenta validar su firma. | Los eventos se reciben, validan, deduplican y procesan; el navegador no es la fuente final. |
| Openpay | API REST con sandbox y producción separados; documenta cargos a tarjetas, tiendas y bancos, llaves públicas/privadas y webhooks verificados. | Separar entornos y custodiar secretos; hacer la integración intercambiable y auditable. |
| Stripe México | Checkout alojado, enlaces de pago y componentes; documenta opciones locales que varían según disponibilidad y elegibilidad. | Una ruta alojada puede facilitar la primera venta y reducir exposición de datos de tarjeta; revisar alcance PCI con especialista. |

Fuentes oficiales: [Mercado Pago, crear orden](https://www.mercadopago.com.mx/developers/es/reference/online-payments/checkout-api/create-order/post); [Conekta, cargos y webhooks](https://developers.conekta.com/docs/cargo-unico-efectivo) y [firma de webhooks](https://developers.conekta.com/docs/autenticaci%C3%B3n-webhooks); [Openpay, referencia de API](https://documents.openpay.mx/docs/api/index.html); [Stripe, Checkout México](https://stripe.com/mx/payments/checkout).

## Patrones de calidad observados

- Checkout alojado y enlaces compartibles ofrecen una entrada sin requerir tienda propia.
- El catálogo de métodos depende del proveedor, país, moneda, configuración, tipo de negocio y reglas de riesgo.
- Métodos como efectivo o transferencia pueden permanecer pendientes después de que el cliente abandona la página.
- Webhooks, búsqueda por API e idempotencia soportan estados asíncronos y reintentos.
- Sandbox y producción deben tener credenciales y endpoints separados.
- Documentación clara de errores, estados, plazos y conciliación forma parte de la experiencia del desarrollador.

## Diferenciación que debemos demostrar

PagoClaro no debe competir con la amplitud de catálogo de una empresa global desde el primer día. Debe demostrar un recorrido de adopción mejor para negocios que están comenzando: alta guiada, explicaciones sin jerga, enlace o QR desde teléfono, confirmación fácil de entender, registro conciliable y soporte útil.

La personalización dinámica se limitará inicialmente a métodos habilitados por contrato, disponibilidad, moneda, importe, dispositivo y elección del cliente. No se usarán perfiles sensibles ni modelos opacos para ocultar alternativas.

## Límites de esta revisión

La revisión no incluyó cuentas de prueba ni transacciones reales. La disponibilidad y el precio cambian por cuenta y contrato. No se inspeccionó código propietario ni se intentaron eludir controles. Toda afirmación de compatibilidad debe validarse en documentación vigente y sandbox del proveedor elegido.
