# Qué publicar y qué mantener privado

PagoClaro mantiene un repositorio público con licencia Apache-2.0. Lo que se publique debe poder permanecer accesible indefinidamente: borrar un archivo no elimina todas sus copias o clones.

## Adecuado para publicación

- Visión, problema, principios, roadmap de alto nivel y decisiones técnicas no sensibles.
- Investigación con fuentes públicas, fechas, metodología y limitaciones; resultados agregados y anonimizados.
- Código fuente, documentación de API, SDKs, ejemplos y configuración de sandbox con datos sintéticos.
- Arquitectura lógica, modelo de pagos, contratos de adapters y flujos generales.
- Política de seguridad, categorías de riesgos y proceso de divulgación responsable.
- Resultados de pilotos agregados, con consentimiento, anonimización y revisión de privacidad.
- Issues reproducibles sin secretos, datos de clientes ni vulnerabilidades explotables.

## No publicar

- Llaves API, tokens, secretos de webhook, contraseñas, certificados privados, archivos .env o URLs firmadas.
- Datos personales, expedientes KYC/KYB, CLABE, PAN, CVV, datos de autenticación, payloads reales o logs identificables.
- Contratos, cotizaciones negociadas, descuentos por volumen, acuerdos de liquidación y documentos de proveedores cuya divulgación esté restringida.
- Reglas internas de fraude, umbrales, listas de riesgo o controles que permitan evadir detección.
- Informes legales confidenciales, consejos bajo privilegio o información privada de comercios.
- Detalles de una vulnerabilidad o incidente antes de contar con una corrección y plan de divulgación.

Si un secreto llega al repositorio, revócalo/ rótalo de inmediato y evalúa limpiar el historial. Borrar el archivo no revoca el secreto.

## Compartir después de sanitizar

- Logs: quitar identificadores, direcciones, referencias de pago, IP, correo y contenido libre; revisar riesgo de reidentificación.
- Investigación: compartir temas agregados, no grabaciones o transcripciones identificables sin permiso.
- Resultados comerciales: usar cohortes agregadas y autorización del comercio.
- Diagramas de infraestructura: retirar nombres de cuenta, IP, dominios internos y controles explotables.
- Material de proveedor: publicar solo lo permitido por contrato; citar la documentación oficial en vez de copiarla.

## Licencia y marca

El archivo LICENSE aplica al material del repositorio salvo que un archivo indique otra licencia. Apache-2.0 no concede derecho sobre la marca PagoClaro, marcas de terceros, contratos ni un servicio alojado. Un servicio comercial requiere términos, privacidad, acuerdos de procesamiento y delimitación de propiedad intelectual separados.

La política pública de seguridad está en SECURITY.md. Los reportes privados deben ir por el canal de seguridad de GitHub si está habilitado.
