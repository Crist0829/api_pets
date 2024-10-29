#!/bin/bash

set -e

docker-compose up -d

cd api_pets_backend
npm run start:dev &
cd ..

cd api_pets_frontend
npm run dev &
cd ..

cd api_pets_analizer
python3 main.py &
cd ..

cd api_pets_data_store
mvn spring-boot:run &
cd ..

echo "All services are running."
