#!/bin/bash


echo "🔧 Compilando imagen..."
docker build -t sistema-node .

echo "🚀 Ejecutando contenedor..."
docker run --rm -p 3000:3000 sistema-node

