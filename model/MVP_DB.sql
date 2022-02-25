DROP TABLE if exists bookclub;
DROP TABLE if exists books;

CREATE TABLE books(
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `author` VARCHAR(255) NOT NULL,
    `rating` DOUBLE(8, 2) NOT NULL,
    `year` VARCHAR(4) NOT NULL,
    `cover` VARCHAR(255) NOT NULL,
    `gr_URL` VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO books (id,name,author,rating,year,cover,gr_URL) values 
(1885, 'Pride and Prejudice', 'Jame Austen', 4.28, '1813', "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320399351i/1885._SY75_.jpg", "https://www.goodreads.com/book/show/1885.Pride_and_Prejudice?from_search=true&from_srp=true&qid=MHMksCQsdK&rank=1")
(14935, 'Sense and Sensibility', 'Jame Austen', 4.08, '1811', "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1397245675i/14935._SY75_.jpg", "https://www.goodreads.com/book/show/14935.Sense_and_Sensibility?from_search=true&from_srp=true&qid=MHMksCQsdK&rank=2")
(6969, 'Emma', 'Jame Austen', 4.03, '1815', "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1373627931i/6969._SY75_.jpg", "https://www.goodreads.com/book/show/6969.Emma?from_search=true&from_srp=true&qid=MHMksCQsdK&rank=3")
(2156, 'Persuasion', 'Jame Austen', 4.14, '1817', "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1385172413i/2156._SY75_.jpg", "https://www.goodreads.com/book/show/2156.Persuasion?from_search=true&from_srp=true&qid=MHMksCQsdK&rank=5")
(45032, 'Mansfield Park', 'Jame Austen', 3.86, '1814', "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1397063295i/45032._SY75_.jpg", "https://www.goodreads.com/book/show/45032.Mansfield_Park?from_search=true&from_srp=true&qid=MHMksCQsdK&rank=9")
(50398, 'Northanger Abbey', 'Jame Austen', 3.84, '1817', "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388201718i/50398._SY75_.jpg", "https://www.goodreads.com/book/show/50398.Northanger_Abbey?from_search=true&from_srp=true&qid=MHMksCQsdK&rank=7")
(56597885, "Beautiful World, Where Are You", "Sally Rooney", 3, "2021", "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618329605l/56597885.jpg", "https://www.goodreads.com/choiceawards/best-fiction-books-2021")
(58744977, "The Last Thing He Told Me", "Laura Dave", 3, "2021", "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1628623381l/58744977._SY475_.jpg", "https://www.goodreads.com/choiceawards/best-mystery-thriller-books-2021")
(58745185. "Malibu Rising", "Taylor Jenkins Reid", 4, "2021","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1628625865l/58745185._SY475_.jpg", "https://www.goodreads.com/choiceawards/best-historical-fiction-books-2021")
(53138095, "A Court of Silver Flames", "Sarah J. Maas", 4, "2021", "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1602570691l/53138095.jpg", "https://www.goodreads.com/choiceawards/best-fantasy-books-2021")
(54985743, "People We Meet on Vacation", "Emily Henry", 4, "2021", "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618913179l/54985743.jpg", "https://www.goodreads.com/choiceawards/best-romance-books-2021")
(54493401, "Project Hail Mary", "Andy Weir", 4, "2021", "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1597695864l/54493401.jpg", "https://www.goodreads.com/choiceawards/best-science-fiction-books-2021")
;



CREATE TABLE bookclub(
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `category` VARCHAR(255) NOT NULL,
    `num_members` INT NOT NULL,
    `current_book` INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (current_book) REFERENCES book(id)
);