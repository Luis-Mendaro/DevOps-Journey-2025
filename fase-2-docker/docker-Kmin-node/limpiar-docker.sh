#!/bin/bash

echo "🧹 Eliminando contenedores detenidos..."
docker container prune -f

echo "🧼 Eliminando imágenes sin uso..."
docker image prune -f

echo "🔌 Eliminando redes no utilizadas..."
docker network prune -f

echo "📦 Eliminando volúmenes huérfanos..."
docker volume prune -f

echo "✅ Limpieza completa."

