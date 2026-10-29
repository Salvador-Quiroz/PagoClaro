# Pricing y economía unitaria

## Hipótesis de valor

El producto debe permitir a un negocio empezar con una barrera baja, entender cuánto cuesta cada operación y pagar por actividad o valor tangible. No se promete ser el proveedor más barato hasta conocer costes contractuales, riesgo, soporte, impuestos y escala.

## Modelos a evaluar

- Comisión por pago exitoso, claramente separada de cargos del método y de impuestos.
- Planes de funciones para comercios que necesitan conciliación, varios usuarios o integraciones.
- Planes negociados para volumen solo cuando el costo de atenderlos se conozca.
- Opciones de entrada con tarifas transparentes que no oculten retenciones, mínimos o plazos de liquidación.

No se aprobarán cargos sorpresivos al comprador, sobretasas o recargos de método sin análisis legal, reglas de red, contrato y presentación explícita antes de pagar.

## Referencias públicas de precio

Consulta realizada el 29-10-2026; estos valores son referencias de las páginas públicas consultadas, no un análisis comparable ni una tarifa para PagoClaro.

- Stripe México muestra 3.6% + MXN 3.00 para una tarjeta nacional exitosa, y 4% + MXN 3.00 para métodos bancarios y otros; la página indica que las tarifas excluyen IVA.
- Conekta muestra 3.4% + MXN 3.00 para tarjeta, MXN 12.50 para transferencia y tarifas para efectivo; su página indica que los precios publicados son válidos desde el 1 de julio de 2024, por lo que deben confirmarse con ventas antes de compararlos.
- Mercado Pago informa que sus tarifas pueden depender del método, canal y plazo de acreditación; su guía para desarrolladores indica que hay soluciones por link para negocios que venden por chat o redes, sin conocimientos técnicos.
- Openpay informa que las tarifas aplicables dependen de las condiciones vigentes del comercio y del alta; solicitar cotización vigente en lugar de asumir una tarifa estándar pública.

Fuentes: [Stripe México, precios](https://stripe.com/mx/pricing?locale=es); [Conekta, planes y tarifas](https://www.conekta.com/pricing); [Mercado Pago Developers, soluciones y tarifas](https://www.mercadopago.com.mx/developers/es/docs/getting-started); [Openpay, términos de servicio](https://www.openpay.mx/descargables/TyC-Venta-Presente.pdf).

## Modelo de coste que PagoClaro debe medir

Para cada método y segmento, calcular:

- comisión del proveedor/adquirente y componente fijo por transacción;
- costo de liquidación, devolución, contracargo, fraude y autenticación;
- infraestructura, mensajería, soporte y conciliación manual;
- costo de onboarding, debida diligencia y rechazo;
- impuestos aplicables a servicios y comisiones;
- costo de adquisición de cada comercio y tiempo hasta uso recurrente;
- coste de disponibilidad y respuesta a incidentes.

La comisión de PagoClaro no debe fijarse hasta confirmar lo anterior y realizar sensibilidad por importe medio. Los cargos fijos pueden pesar más en transacciones pequeñas; hay que mostrar ejemplos comprensibles por monto sin ocultar supuestos.

## Métricas para decidir

- Margen de contribución por transacción y comercio activo.
- Costo de soporte por alta, primer pago y pago fallido.
- Retención de comercios y frecuencia de uso.
- Costos y tiempos de liquidación por proveedor/método.
- Reembolsos, fraude, contracargos y pérdidas esperadas.
- Precio comprendido por el comercio y diferencia entre monto bruto y neto.

La meta es ser accesible en precio y esfuerzo de uso, manteniendo un servicio sostenible y seguro.
