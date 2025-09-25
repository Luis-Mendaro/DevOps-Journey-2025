# Imagen base oficial de Node
FROM node:18

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos
COPY package.json ./
COPY app.js ./

# Instalar dependencias (si las hubiera)
RUN npm install

# Exponer puerto
EXPOSE 3000

# Comando de inicio
CMD ["npm", "start"]

