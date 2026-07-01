CREATE TABLE IF NOT EXISTS photos (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    photoname VARCHAR(255) NOT NULL,
    Takendate INT,
    Camera VARCHAR(100),
    PeopleInIt TEXT,
    authorID INT
);