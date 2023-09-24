insert into authority(id,name) values (1,'ROLE_ADMIN');
insert into authority(id,name) values (2,'ROLE_REGISTERED_USER');
insert into authority(id,name) values (3,'ROLE_COMPANY');


insert into user (id,role, username, password, email, mobile,enabled,last_password_reset_date) values (1,'Admin','truman', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra' ,'isaisic587@gmail.com', '305-555-0163',true,'1983-07-12 21:30:55.888');
insert into user (id,role, username, password, email, mobile,enabled,last_password_reset_date) values (2,'RegisteredUser','raymond', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'isaisic587+2@gmail.com', '305-555-0720',true,'1983-07-12 21:30:55.888');
insert into user (id,role, username, password, email, mobile,enabled,last_password_reset_date) values (3,'RegisteredUser','aca', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'isaisic587+3@gmail.com', '305-555-0720',true,'1983-07-12 21:30:55.888');
insert into user (id,role, username, password, email, mobile,enabled,last_password_reset_date) values (4,'RegisteredUser','milica', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'isaisic587+4@gmail.com', '305-555-0720',true,'1983-07-12 21:30:55.888');
insert into user (id,role, username, password, email, mobile,enabled,last_password_reset_date) values (5,'RegisteredUser','dejan', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'isaisic587+5@gmail.com', '305-555-0720',true,'1983-07-12 21:30:55.888');
insert into user (id,role, username, password, email, mobile,enabled,last_password_reset_date) values (6,'Company','agrar', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'isaisic587+6@gmail.com', '305-555-0720',true,'1983-07-12 21:30:55.888');
insert into user (id,role, username, password, email, mobile,enabled,last_password_reset_date) values (7,'Company','agrar1', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'isaisic587+7@gmail.com', '305-555-07201',false,'1983-07-12 21:30:55.888');

insert into user_authority (user_id,authority_id) values (1,1);
insert into user_authority (user_id,authority_id) values (2,2);
insert into user_authority (user_id,authority_id) values (3,2);
insert into user_authority (user_id,authority_id) values (4,2);
insert into user_authority (user_id,authority_id) values (5,2);

insert into admin(id, first_name, last_name)
values (1, 'Jova', 'Jovic');

insert into registered_user(id, first_name1, last_name1)
values (2, 'Milos', 'Milic');

insert into registered_user(id, first_name1, last_name1)
values (3, 'Aleksandar', 'Jovanovic');

insert into registered_user(id, first_name1, last_name1)
values (4, 'Milica', 'Jovanovic');

insert into registered_user(id, first_name1, last_name1)
values (5, 'Dejan', 'Ilic');

insert into address(id, city, country,street, zip_code)
values (1, 'Novi Sad', 'Srbija', 'Miše Dimitrijevića 10','21000');


insert into company(id, name, reg_num_of_company, address_id)
values (6, 'Agrar', '8542243320', 1);

insert into company(id, name, reg_num_of_company, address_id)
values (7, 'Agrar1', '8542243320', 1);


insert into product(id, name, additional_description,picture,registered_user_id)
values (1,'Prikolica', 'Prikolica je ocuvana i u dobrom je stanju, tehnicki je ispravna', '/assets/mechanization/trailer.jpg', 2);

insert into product(id, name, additional_description,picture,registered_user_id)
values (2,'Rasipač' ,'Rasipač ima kapacitet 1400kg. Boja je fabrička. Nema oštećenja.', '/assets/mechanization/rasipac.jpg', 2);

insert into product(id, name, additional_description,picture,registered_user_id)
values (3, 'Pšenica','Psenica je sveza', '/assets/products/wheat.jpg', 3);

insert into product(id, name, additional_description,picture,registered_user_id)
values (4, 'Paradajz','Svezi paradajz', '/assets/products/tomatoes.jpg', 2);

insert into product(id, name, additional_description,picture,registered_user_id)
values (5, 'Traktor','U odlicnom stanju', '/assets/mechanization/john_deer.jpg', 4);

insert into product(id, name, additional_description,picture,registered_user_id)
values (6, 'Kombajn','U losem stanju', '/assets/mechanization/kombajn.jpg', 3);

insert into product(id, name, additional_description,picture,registered_user_id)
values (7,'Prikolica', 'Odlicna prikolica', '/assets/mechanization/prikolica.jpg', 2);

insert into product(id, name, additional_description,picture,registered_user_id)
values (8,'Setvospremač', 'Nov setvospremač, kupljen prošle godine, nije korišćen.', '/assets/mechanization/setvospremac1.jpg', 5);

insert into product(id, name, additional_description,picture,registered_user_id)
values (9,'Prskalica', 'Svi delovi su menjani na prskalici. Ispravna je. Raspon prskalice je 12 metara.', '/assets/mechanization/prskalica.jpeg', 3);

insert into product(id, name, additional_description,picture,registered_user_id)
values (10,'Traktor', 'Traktor je u odličnom stanju od dodatne opreme ima ugrađenu navigaciju. Svi delovi su fabrički.', '/assets/mechanization/armatrak.jpg', 4);

insert into product(id, name, additional_description,picture,registered_user_id)
values (11,'Drljača', 'Tupanjac laka drljača, širina 5 metara. Kao nova.', '/assets/mechanization/drljaca.jpg', 2);

insert into product(id, name, additional_description,picture,registered_user_id)
values (12,'Sejalica', 'Šestoredna sejalica na prodaju. Korišćena je jednu sezonu, u ispravnom je stanju. Očuvana je, nema vidljivih oštećenja.', '/assets/mechanization/sejalica.jpg', 5);

insert into product(id, name, additional_description,picture,registered_user_id)
values (13,'Setvospremač', 'Širina je 4 metra. Obrađivano je sa njim 15 hektara. Koristio se 5 godina.', '/assets/mechanization/setvospremac.jpeg', 4);

insert into product(id, name, additional_description,picture,registered_user_id)
values (14,'Elevator', 'Elevator nema je odličan. Radi na trofaznu struju, nedavno je ofarban u crvenu boju.', '/assets/mechanization/elevator.jpg', 3);

insert into product(id, name, additional_description,picture,registered_user_id)
values (15,'Motokultivator', 'Skoro kao nov, nije puno korišćen. Obrađivana je sa njim samo bašta.', '/assets/mechanization/motokultivator.png', 5);

insert into product(id, name, additional_description,picture,company_id)
values (16,'Traktor', 'Nov traktor, proizveden 2023 godine, proizveden u Nemačkoj. Od opreme ima navigaciju, klimu i radio.', '/assets/mechanization/new_holland.jpeg', 6);

insert into product(id, name, additional_description,picture,company_id)
values (17,'Sejalica', 'Nova četvororedna sejalica proizvrdena u Turskoj.', '/assets/mechanization/sejalica4.png', 6);

insert into product(id, name, additional_description,picture,company_id)
values (18,'Sejalica', 'Nova četvororedna sejalica proizvrdena u Turskoj.', '/assets/mechanization/sejalica4.png', 6);


insert into product_pictures(product_id, pictures)
values (1, '/assets/mechanization/trailer.jpg');

insert into product_pictures(product_id, pictures)
values (2, '/assets/mechanization/rasipac.jpg');

insert into product_pictures(product_id, pictures)
values (3, '/assets/products/wheat.jpg');

insert into product_pictures(product_id, pictures)
values (4, '/assets/products/tomatoes.jpg');

insert into product_pictures(product_id, pictures)
values (5, '/assets/mechanization/john_deer.jpg');

insert into product_pictures(product_id, pictures)
values (6, '/assets/mechanization/kombajn.jpg');

insert into product_pictures(product_id, pictures)
values (7, '/assets/mechanization/prikolica.jpg');

insert into product_pictures(product_id, pictures)
values (8, '/assets/mechanization/setvospremac1.jpg');

insert into product_pictures(product_id, pictures)
values (9,'/assets/mechanization/prskalica.jpeg');

insert into product_pictures(product_id, pictures)
values (10, '/assets/mechanization/armatrak.jpg');

insert into product_pictures(product_id, pictures)
values (11,'/assets/mechanization/drljaca.jpg');

insert into product_pictures(product_id, pictures)
values (12, '/assets/mechanization/sejalica.jpg');

insert into product_pictures(product_id, pictures)
values (13, '/assets/mechanization/setvospremac.jpeg');

insert into product_pictures(product_id, pictures)
values (14, '/assets/mechanization/elevator.jpg');

insert into product_pictures(product_id, pictures)
values (14, '/assets/mechanization/elevator1.jpg');

insert into product_pictures(product_id, pictures)
values (15, '/assets/mechanization/motokultivator.png');

insert into product_pictures(product_id, pictures)
values (16, '/assets/mechanization/new_holland.jpeg');

insert into product_pictures(product_id, pictures)
values (17, '/assets/mechanization/sejalica4.png');

insert into product_pictures(product_id, pictures)
values (18, '/assets/mechanization/sejalica4.png');




insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, registered_user_id)
values(1, '2023-02-11 19:00:00', 'Prodaja prikolice', 'Mehanizacija', 'Prikolice', 345, 1, 'Novi Sad', '0675542857',true, 1, 2);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, registered_user_id)
values(2, '2023-03-13 17:00:00', 'Prodaje se kultivator', 'Mehanizacija', 'Priključne mašine', 9000, 1, 'Beograd', '0675542857',true, 2, 2);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable,  product_id, registered_user_id)
values(3, '2023-02-15 12:00:00', 'Prodaje se psenica', 'Poljoprivredni proizvod', 'Zitarice', 99, 1, 'Pancevo', '0675542857',true, 3, 3);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, registered_user_id)
values(4, '2023-07-17 16:00:00', 'Prodaje se paradajz', 'Poljoprivredni proizvod', 'Povrce', 150, 1, 'Novi Sad', '0675542857',true, 4, 2);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, registered_user_id)
values(5, '2023-06-18 19:00:00', 'Prodaje se traktor', 'Mehanizacija', 'Traktori', 150, 1, 'Novi Sad', '0675542857',true, 5, 4);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, registered_user_id)
values(6, '2023-02-22 11:00:00', 'Prodaje se kombajn', 'Mehanizacija', 'Kombajni', 756, 1, 'Novi Sad', '0675542857',true, 6, 3);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, registered_user_id)
values(7, '2023-05-17 15:00:00', 'Prodaje se prikolica', 'Mehanizacija', 'Prikolice', 250, 1, 'Novi Sad', '0675542857',true, 7, 2);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, registered_user_id)
values(8, '2023-07-28 12:00:00', 'Prodaje se setvospremač', 'Mehanizacija', 'Priključne mašine', 250000, 1, 'Vrbas', '0648575857',true, 8, 5);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, registered_user_id)
values(9, '2023-06-24 14:00:00', 'Prodaje se prskalica', 'Mehanizacija', 'Priključne mašine', 250000, 1, 'Srbobran', '0649511657',true, 9, 3);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, registered_user_id)
values(10, '2023-07-02 12:00:00', 'Prodaje se traktor', 'Mehanizacija', 'Traktori', 1700000, 1, 'Beograd', '0639511688',true, 10, 4);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, registered_user_id)
values(11, '2023-07-02 13:00:00', 'Prodaje se drljača', 'Mehanizacija', 'Priključne mašine', 180000, 1, 'Subotica', '066689257',true, 11, 2);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, registered_user_id)
values(12, '2023-06-15 11:00:00', 'Prodaje se sejalica', 'Mehanizacija', 'Priključne mašine', 240000, 1, 'Apatin', '0649518957',true, 12, 5);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, registered_user_id)
values(13, '2023-05-25 10:00:00', 'Prodaje se setvospremač', 'Mehanizacija', 'Priključne mašine', 380000, 1, 'Sremska Mitrovica', '0612578965',true, 13, 4);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, registered_user_id)
values(14, '2023-08-02 22:00:00', 'Prodaje se elevator', 'Mehanizacija', 'Mašine i alati', 90000, 1, 'Šabac', '0688532314',true, 14, 3);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, registered_user_id)
values(15, '2023-07-27 18:00:00', 'Prodaja motokultivatora', 'Mehanizacija', 'Mašine i alati', 120000, 1, 'Sombor', '0669832267',true, 15, 5);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, company_id)
values(16, '2023-06-11 18:00:00', 'Prodaja traktora', 'Mehanizacija', 'Traktori', 7500000, 1, 'Kragujevac', '065782261',true, 16, 6);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, company_id)
values(17, '2023-06-01 18:00:00', 'Prodaja sejalice', 'Mehanizacija', 'Priključne mašine', 1200000, 1, 'Apatin', '0635629832',true, 17, 6);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, company_id)
values(18, '2023-07-01 18:00:00', 'Prodaja sejalice', 'Mehanizacija', 'Priključne mašine', 1200000, 1, 'Zrenjanin', '0635629832',false, 18, 6);

insert into registered_user_announcements(registered_user_id, announcements_id)
values(2, 1);

insert into registered_user_announcements(registered_user_id, announcements_id)
values(2, 2);

insert into registered_user_announcements(registered_user_id, announcements_id)
values(2, 4);

insert into registered_user_announcements(registered_user_id, announcements_id)
values(3, 3);


insert into registered_user_products(registered_user_id, products_id)
values (2,1);

insert into registered_user_products(registered_user_id, products_id)
values (2,2);

insert into registered_user_products(registered_user_id, products_id)
values (3,3);

insert into registered_user_products(registered_user_id, products_id)
values (2,4);

insert into advertisement(id, title, text,price,start_date, end_date, enable, image, company_id)
values (1,'Akcija, 30% popusta', 'Savladajte sve vremenske uslove s našim gumama koje pružaju izvanredno prianjanje i kontrolu.Gume koje štede gorivo. Najbolje gume za traktore', 700, '2023-09-13 21:30:55.888', '2023-11-30 21:30:55.888', true, '/assets/advertisement/continental-tires.jpg', 6);
insert into advertisement(id, title, text,price,start_date, end_date, enable, image, company_id)
values (2,'Pravo vreme za kupovinu', 'Subvencije na priključne mašine, posetite nas i uverite se u vrhunski kvalitet poljoprivredne mehanizacije i traktora', 800, '2023-09-14 21:30:55.888', '2023-12-10 21:30:55.888', true, '/assets/advertisement/subvencije-prikljucne-masine.jpg', 6);
insert into advertisement(id, title, text,price,start_date, end_date, enable, image, company_id)
values (3,'Popusti na kupovinu taktora i mehanizacije', 'Velika akcija, opremite se za budućnost poljoprivrede s našim traktorima i mehanizacijom, sada dostupnim po najpovoljnijim cenama ikada!', 800, '2023-09-15 21:30:55.888', '2023-11-29 21:30:55.888', true, '/assets/advertisement/tactor-puma.jpg', 6);
insert into advertisement(id, title, text,price,start_date, end_date, enable, image, company_id)
values (4,'Zamena staro za novo', 'Kod nas imate mogućnost zamene starog za novo. Pilika koja se ne odbija. Čekamo Vas.', 800, '2023-09-10 21:30:55.888', '2024-01-08 21:30:55.888', true, '/assets/advertisement/Staro-novo.jpg', 6);
insert into advertisement(id, title, text,price,start_date, end_date, enable, image, company_id)
values (5,'Vrhunski kvalitet', 'Savršen alat za svakog poljoprivrednika - naš plug nudi izvanrednu izdržljivost i dugotrajnost.Nema više muka pri pripremi zemlje - uz naš plug, to će biti zadovoljstvo!', 800, '2023-09-10 21:30:55.888', '2024-01-01 21:30:55.888', true, '/assets/advertisement/plug1.jpg', 6);



