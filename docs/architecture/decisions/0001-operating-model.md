# ADR 0001: hipótesis de operación de la primera versión

- Estado: propuesta para validar con asesoría mexicana y proveedor/adquirente.
- Fecha: 2026-10-29.

## Contexto

El producto necesita ofrecer checkout y varios métodos con una carga razonable de cumplimiento, seguridad y operaciones. Recibir, mantener o transferir fondos por cuenta propia podría cambiar sustancialmente la clasificación y obligaciones del servicio.

## Decisión propuesta

Diseñar primero como una capa de software que conecta comercios con proveedores de pago existentes. El proveedor procesa y liquida directamente al comercio según su relación y contratos. PagoClaro no ofrece monedero, saldo, crédito o custodia en la primera versión; evita datos completos de tarjeta.

## Consecuencias

- Reduce superficie técnica de tarjeta y evita inventar una integración directa de infraestructura financiera.
- Tarifas, países, plazos, métodos, reversas y elegibilidad dependen del proveedor.
- Debe confirmarse si PagoClaro actúa como agregador, participante o prestador sujeto a obligaciones particulares, según contratos y comportamiento real.
- Las interfaces se construyen como adapter para permitir cambiar de proveedor sin asumir que todos comparten semántica.
- Cualquier decisión de custodiar fondos, liquidar a subcomercios, almacenar saldo o conectarse directamente a SPEI exige detener expansión y reevaluar clasificación, contratos, capital, controles y licencias.

## Puerta de decisión

No usar esta hipótesis como afirmación de cumplimiento. Obtener dictamen especializado y confirmación escrita de proveedor/adquirente antes de producción.
