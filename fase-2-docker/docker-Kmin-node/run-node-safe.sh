#!/bin/bash

PORT=3000

echo "🔍 Verificando si el puerto $PORT está libre..."
if lsof -i :$PORT >/dev/null; then
    echo "⚠️ El puerto $PORT está ocupado. Abortando ejecución."
    exit 1
fi

echo "🔧 Compilando imagen..."
docker build -t sistema-node .

echo "🚀 Ejecutando contenedor..."
docker run --rm -p $PORT:$PORT sistema-node

