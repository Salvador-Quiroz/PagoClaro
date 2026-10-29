# Organización prevista del repositorio

La estructura debe crecer junto con el primer flujo ejecutable. No crear directorios de aplicación vacíos ni separar servicios antes de conocer límites de despliegue y operación.

## Estructura actual de cimientos

- README, licencia y políticas de contribución/seguridad/soporte en la raíz.
- docs/product para visión, perfiles, adopción y alcance.
- docs/research para mercado, benchmark y registro de fuentes.
- docs/regulatory para revisión mexicana y puertas de producción.
- docs/architecture para modelo de pagos, visión técnica, decisiones y estructura de código.
- docs/security para controles, amenazas y privacidad.
- docs/operations para soporte y preparación del piloto.
- docs/roadmap.md para etapas y criterios de salida.

## Estructura de código propuesta para la primera implementación

    apps/
      api/                 API de comercios y pagos
      merchant-web/        panel de comercios
      checkout/            página pública de pago
    packages/
      payment-domain/      dinero, estados y reglas puras
      provider-contracts/  contrato común y errores normalizados
      provider-adapters/   integraciones concretas con proveedores
      design-system/       componentes accesibles compartidos
      sdk/                 cliente público solo cuando exista contrato estable
    infra/
      development/         configuración reproducible local
      deployment/          infraestructura y despliegue cuando se elija proveedor
    docs/
      product/
      research/
      regulatory/
      architecture/
      security/
      operations/

Al comenzar runtime, documentar package manager, Node LTS, framework, base de datos, migraciones, secretos, observabilidad, entornos y modelo de despliegue en ADR. La primera versión debe ser modular y operable por el equipo disponible. Separar aplicaciones de cara al usuario si el caso lo requiere, y mantener el dominio de pagos independiente del proveedor web.

## Convenciones

- Identificadores de código en inglés; interfaz y documentación de usuario en español mexicano inicialmente.
- Cada método externo vive bajo su adapter y no filtra estados propietarios al dominio.
- Contratos de API se versionan y documentan.
- No guardar archivos de exportación o datos reales en el repositorio.
- La configuración sensible vive fuera del control de versiones.
