drop table if exists books;
CREATE TABLE books (
	author   text,
    bookformat   text,
    `desc`   text,
    genre   text,
    img   text,
    isbn   text,
    isbn13   text,
    link   text,
    pages   text,
    rating   text,
    reviews   text,
    title   text,
    totalratings   text
);

SHOW VARIABLES LIKE "secure_file_priv";

LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/GoodReads_100k_books.csv' 
INTO TABLE books 
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n' 
IGNORE 1 ROWS;


select count(*) from books;