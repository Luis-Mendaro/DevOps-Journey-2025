docker-kmin-node
Contenedor Node.js básico con lógica modular y control de rutas. Esta fase encapsula una aplicación mínima en Docker, con respuesta condicional según la ruta solicitada.

📁 Estructura
docker-kmin-node/
├── app.js → Lógica del servidor Node.js
├── Dockerfile → Imagen Docker para contenedor Node
├── package.json → Dependencias y metadatos del proyecto
└── README.md → Documentación técnica

🚀 Comandos

Construir imagen:  
• 	docker build -t sistema-node .

Ejecutar contenedor:  
•   docker run --rm -p 3000:3000 sistema-node

🌐 Verificación en navegador
• 	http://localhost:3000 → muestra mensaje principal
• 	http://localhost:3000/pepito → devuelve "Ruta no encontrada"

⚙️ Comportamiento
• 	El servidor responde en el puerto 3000
• 	Usa codificación UTF-8 para evitar errores de caracteres
• 	Controla rutas básicas con if (req.url === '/')
- 

• 	Devuelve mensajes en texto plano

🧠 Aprendizajes
• 	Encapsulamiento de lógica Node.js en contenedor Docker
• 	Gestión de puertos y procesos activos
• 	Codificación correcta en respuestas HTTP
• 	Flujo de reconstrucción y ejecución reproducible

⚠️ Consideraciones sobre entorno Windows
Durante el desarrollo en Windows con Docker Desktop y WSL2, se detectaron conflictos frecuentes relacionados con la gestión del puerto 3000:
• 	El puerto quedaba bloqueado incluso después de detener el contenedor
• 	Procesos como com.docker.backend.exe y wslrelay.exe interferían con la liberación del puerto
• 	A veces era necesario reiniciar Docker Desktop o el sistema completo
Esto complica la reproducibilidad para usuarios que trabajan en Windows, especialmente en Uruguay donde este entorno es común.

🧭 Decisión técnica
Para evitar estos conflictos y trabajar con más estabilidad, se decidió migrar el sistema modular a una máquina virtual con Ubuntu Linux. Esto permite:
• 	Docker nativo sin intermediarios
• 	Gestión directa de puertos y procesos (lsof, kill, systemctl)
• 	Mayor fluidez en scripting, automatización y documentación técnica

🔗 Relación con otras fases
Esta fase se construye sobre la base de docker-html-basico, pasando de HTML estático a lógica dinámica en Node.js. 
Es parte del sistema modular documentado en DevOps-Journey-2025.


