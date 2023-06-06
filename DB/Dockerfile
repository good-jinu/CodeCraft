# Use the official MySQL image as the base image
FROM mysql:latest

# Set the MySQL root password (change 'password' to your desired password)
ENV MYSQL_ROOT_PASSWORD=password

# Set the default database name (change 'mydatabase' to your desired database name)
ENV MYSQL_DATABASE=codecraft_db

# Set the character set and collation for the default database
ENV MYSQL_CHARSET=utf8mb4
ENV MYSQL_COLLATION=utf8mb4_unicode_ci

# Copy the SQL initialization scripts to the container
COPY ./init.sql /docker-entrypoint-initdb.d/

# Expose port 5001 (change the port number to your desired value)
EXPOSE 5001
