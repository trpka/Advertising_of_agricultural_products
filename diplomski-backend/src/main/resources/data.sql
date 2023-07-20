insert into authority(id,name) values (1,'ROLE_ADMIN');
insert into authority(id,name) values (2,'ROLE_OWNER');


insert into user (id,role, username, password, first_name, last_name, email, mobile,enabled,last_password_reset_date) values (1,'Admin','truman', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Truman', 'Willis', 'isamarkomarkovic99@gmail.com', '305-555-0163',true,'1983-07-12 21:30:55.888');
insert into user (id,role, username, password, first_name, last_name, email, mobile,enabled,last_password_reset_date) values (2,'Owner','raymond', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Raymond', 'Weaving', 'isamarkomarkovic99@gmail.com', '305-555-0720',true,'1983-07-12 21:30:55.888');
insert into user (id,role, username, password, first_name, last_name, email, mobile,enabled,last_password_reset_date) values (3,'Owner','aca', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Aleksandar', 'Jovanovic', 'aca@gmail.com', '305-555-0720',true,'1983-07-12 21:30:55.888');
insert into user (id,role, username, password, first_name, last_name, email, mobile,enabled,last_password_reset_date) values (4,'Owner','milica', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Aleksandar', 'Jovanovic', 'milica@gmail.com', '305-555-0720',true,'1983-07-12 21:30:55.888');
insert into user (id,role, username, password, first_name, last_name, email, mobile,enabled,last_password_reset_date) values (5,'Owner','dejan', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Aleksandar', 'Jovanovic', 'dejan@gmail.com', '305-555-0720',true,'1983-07-12 21:30:55.888');


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
values(1, '2023-02-17 12:00:00', 'Prodaja prikolice', 'Mehanizacija', 'Prikljucne masine', 345.4, 1, 'Novi Sad', '0675542857', 1, 2);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number,  product_id, registered_user_id)
values(2, '2023-02-17 12:00:00', 'Prodaje se kultivator', 'Mehanizacija', 'Prikljucne masine', 9000.4, 1, 'Beograd', '0675542857', 2, 2);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number,  product_id, registered_user_id)
values(3, '2023-02-17 12:00:00', 'Prodaje se psenica', 'Poljoprivredni proizvod', 'Zitarice', 99.4, 1, 'Pancevo', '0675542857', 3, 3);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number,  product_id, registered_user_id)
values(4, '2023-02-17 12:00:00', 'Prodaje se paradajz', 'Poljoprivredni proizvod', 'Povrce', 150.0, 1, 'Novi Sad', '0675542857', 4, 2);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number,  product_id, registered_user_id)
values(5, '2023-02-17 12:00:00', 'Prodaje se traktor', 'Mehanizacija', 'Traktor', 150.0, 1, 'Novi Sad', '0675542857', 5, 4);


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