DROP DATABASE IF EXISTS codecraft_db;
CREATE DATABASE codecraft_db DEFAULT CHARACTER SET UTF8;
USE codecraft_db;

DROP TABLE IF EXISTS webui_templates;
CREATE TABLE webui_templates (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(255) NOT NULL,
    thumbnail_url varchar(255) NOT NULL
);

INSERT INTO webui_templates (id, name, thumbnail_url) VALUES
(1, 'A', '/images/A.jpg'),
(2, 'B', '/images/B.jpg'),
(3, 'C', '/images/C.jpg');
