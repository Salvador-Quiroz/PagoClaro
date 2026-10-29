# ADR 0002: empezar con módulos explícitos y un despliegue acotado

- Estado: propuesta.
- Fecha: 2026-10-29.

## Contexto

El repositorio inicia vacío y aún no existe volumen, integración activa ni equipo operacional. La arquitectura debe mantener límites claros sin crear sistemas distribuidos que requieran operación antes de validar el producto.

## Decisión propuesta

Empezar con una aplicación modular con límites de dominio explícitos. Usar contratos de proveedor y eventos internos versionados. Mantener persistencia transaccional para estado y eventos; ejecutar trabajo asíncrono mediante outbox/worker con reintento idempotente. La elección concreta de lenguaje, framework, base de datos y despliegue se documentará en una ADR de implementación antes de añadir runtime.

## Consecuencias

- El equipo puede revisar el flujo completo con pocas piezas desplegables.
- Límites internos preparan extracción futura si existe una razón operacional.
- No hay que operar Kafka, una malla de servicios o varios almacenes por anticipado.
- El patrón outbox y el monitoreo siguen siendo necesarios para eventos y webhooks.
- La decisión debe revisarse si los límites de disponibilidad, escala o seguridad lo requieren.
