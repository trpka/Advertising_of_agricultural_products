insert into authority(id,name) values (1,'ROLE_ADMIN');
insert into authority(id,name) values (2,'ROLE_REGISTERED_USER');
insert into authority(id,name) values (3,'ROLE_COMPANY');


insert into user (id,role, username, password, email, mobile,enabled,last_password_reset_date) values (1,'Admin','truman', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra' ,'isamarkomarkovic99@gmail.com', '305-555-0163',true,'1983-07-12 21:30:55.888');
insert into user (id,role, username, password, email, mobile,enabled,last_password_reset_date) values (2,'RegisteredUser','raymond', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'isamarkomarkovic99@gmail.com', '305-555-0720',true,'1983-07-12 21:30:55.888');
insert into user (id,role, username, password, email, mobile,enabled,last_password_reset_date) values (3,'RegisteredUser','aca', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'aca@gmail.com', '305-555-0720',true,'1983-07-12 21:30:55.888');
insert into user (id,role, username, password, email, mobile,enabled,last_password_reset_date) values (4,'RegisteredUser','milica', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'milica@gmail.com', '305-555-0720',true,'1983-07-12 21:30:55.888');
insert into user (id,role, username, password, email, mobile,enabled,last_password_reset_date) values (5,'RegisteredUser','dejan', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'dejan@gmail.com', '305-555-0720',true,'1983-07-12 21:30:55.888');


insert into user_authority (user_id,authority_id) values (1,1);
insert into user_authority (user_id,authority_id) values (2,2);
insert into user_authority (user_id,authority_id) values (3,2);

insert into registered_user(id, first_name1, last_name1)
values (2, 'Milos', 'Milic');

insert into registered_user(id, first_name1, last_name1)
values (3, 'Aleksandar', 'Jovanovic');

insert into registered_user(id, first_name1, last_name1)
values (4, 'Milica', 'Jovanovic');

insert into registered_user(id, first_name1, last_name1)
values (5, 'Dejan', 'Ilic');


insert into product(id, name, additional_description,picture,registered_user_id)
values (1,'Prikolica', 'Prikolica je ocuvana i u dobrom je stanju, tehnicki je ispravna', '/assets/trailers/trailer.jpg', 2);

insert into product(id, name, additional_description,picture,registered_user_id)
values (2,'Kultivator' ,'Kultivator je crvene boje', '/assets/set-toppers/setvospremac1.jpg', 2);

insert into product(id, name, additional_description,picture,registered_user_id)
values (3, 'Pšenica','Psenica je sveza', '/assets/cereals/wheat.jpg', 3);

insert into product(id, name, additional_description,picture,registered_user_id)
values (4, 'Paradajz','Svezi paradajz', '/assets/vegetables/tomatoes.jpg', 2);

insert into product(id, name, additional_description,picture,registered_user_id)
values (5, 'Traktor','U odlicnom stanju', '/assets/tractors/john_deer.jpg', 4);



insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number,  product_id, registered_user_id)
values(1, '2023-02-17 12:00:00', 'Prodaja prikolice', 'Mehanizacija', 'Prikolice', 345, 1, 'Novi Sad', '0675542857', 1, 2);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number,  product_id, registered_user_id)
values(2, '2023-02-17 12:00:00', 'Prodaje se kultivator', 'Mehanizacija', 'Priključne mašine', 9000, 1, 'Beograd', '0675542857', 2, 2);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number,  product_id, registered_user_id)
values(3, '2023-02-17 12:00:00', 'Prodaje se psenica', 'Poljoprivredni proizvod', 'Zitarice', 99, 1, 'Pancevo', '0675542857', 3, 3);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number,  product_id, registered_user_id)
values(4, '2023-02-17 12:00:00', 'Prodaje se paradajz', 'Poljoprivredni proizvod', 'Povrce', 150, 1, 'Novi Sad', '0675542857', 4, 2);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number,  product_id, registered_user_id)
values(5, '2023-02-17 12:00:00', 'Prodaje se traktor', 'Mehanizacija', 'Traktori', 150, 1, 'Novi Sad', '0675542857', 5, 4);


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

insert into advertisement(id, title, text,price,date, image)
values (1,'Traktorske gume', 'Najbolje gume u celoj Srbiji', 700, '1983-07-12 21:30:55.888','/assets/tires/tires.png');