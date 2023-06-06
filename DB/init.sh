#!/bin/bash

# Set the desired container and image names
container_name="mysql-instance"
image_name="mysql-container"

# Check if the container already exists
if docker container inspect "$container_name" >/dev/null 2>&1; then
    echo "Container '$container_name' already exists. Starting the existing container..."
    docker start "$container_name"
else
    echo "Container '$container_name' does not exist. Building the Docker image and creating a new container..."

    # Build the Docker image using the Dockerfile
    docker build -t "$image_name" .

    # Run the Docker container with port mapping and container name
    docker run -d -p 5001:3306 --name "$container_name" "$image_name"
fi
