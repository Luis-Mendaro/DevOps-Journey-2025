🧭 Migración técnica a entorno Linux
Este documento registra la decisión técnica de migrar el sistema modular de Docker/Node.js desde Windows a una máquina virtual con Ubuntu Linux, debido a conflictos de reproducibilidad y gestión de puertos.

⚠️ Problemas detectados en Windows
• El puerto 3000 quedaba bloqueado incluso después de detener el contenedor.  
• Procesos como com.docker.backend.exe y wslrelay.exe interferían con la liberación del puerto.  
• A veces era necesario reiniciar Docker Desktop o el sistema completo.  
• Reproducibilidad comprometida para usuarios en Uruguay con entorno Windows.

✅ Decisión técnica
Se migró el sistema a una máquina virtual con Ubuntu Linux para:  
• Usar Docker nativo sin intermediarios.  
• Gestionar puertos y procesos directamente (`lsof`, `kill`, `systemctl`).  
• Automatizar scripts sin interferencias del sistema host.  
• Documentar el flujo de ejecución de forma reproducible y escalable.

🧱 Entorno Linux funcional
• Docker instalado con `apt`.  
• Imagen `sistema-node` construida exitosamente.  
• Contenedor ejecutado sin conflictos.  
• Navegador dentro de la VM accede correctamente a `localhost:3000`.  
• Scripts funcionales para ejecución, verificación y limpieza.

📁 Ubicación del sistema actual
• Carpeta principal:  
  `/home/luis/DevOps-Journey-2025/fase-2-docker/docker-kmin-node`

• Archivos clave:  
  - `app.js`  
  - `Dockerfile`  
  - `package.json`  
  - `README.md`  
  - `run-node.sh`  
  - `run-node-safe.sh`  
  - `limpiar-docker.sh`

🧪 Scripts reproducibles
• `run-node.sh`: construye y ejecuta el contenedor.  
• `run-node-safe.sh`: verifica si el puerto 3000 está libre antes de ejecutar.  
• `limpiar-docker.sh`: elimina contenedores detenidos, imágenes sin uso, redes y volúmenes huérfanos.  
Todos los scripts están versionados, con permisos de ejecución (`chmod +x`) y listos para ser ejecutados desde la terminal de Ubuntu.

📡 Flujo de trabajo definido
• Edición y documentación en Windows (Visual Studio Code).  
• Versionado y commits en GitHub (origen de verdad).  
• Sincronización en Ubuntu mediante `git pull`.  
• Ejecución de scripts en entorno Linux nativo.  
• Estructura modular por fases, lista para escalar e integrar CI/CD sin reorganización futura.

🧠 Aprendizaje
La migración no fue un retroceso, sino una validación técnica. El entorno Linux permite reproducibilidad real, control total, documentación clara y ejecución segura. Esta fase queda cerrada con infraestructura funcional, scripts automatizados y flujo de trabajo definitivo.

