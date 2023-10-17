insert into authority(id,name) values (1,'ROLE_ADMIN');
insert into authority(id,name) values (2,'ROLE_REGISTERED_USER');
insert into authority(id,name) values (3,'ROLE_COMPANY');


insert into user (id,role, username, password, email, mobile,enabled,last_password_reset_date) values (1,'Admin','nikola', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra' ,'isaisic587@gmail.com', '305-555-0163',true,'1983-07-12 21:30:55.888');
insert into user (id,role, username, password, email, mobile,enabled,last_password_reset_date) values (2,'RegisteredUser','milos', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'isaisic587+2@gmail.com', '305-555-0720',true,'1983-07-12 21:30:55.888');
insert into user (id,role, username, password, email, mobile,enabled,last_password_reset_date) values (3,'RegisteredUser','aca', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'isaisic587+3@gmail.com', '305-555-0720',true,'1983-07-12 21:30:55.888');
insert into user (id,role, username, password, email, mobile,enabled,last_password_reset_date) values (4,'RegisteredUser','milica', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'isaisic587+4@gmail.com', '305-555-0720',true,'1983-07-12 21:30:55.888');
insert into user (id,role, username, password, email, mobile,enabled,last_password_reset_date) values (5,'RegisteredUser','dejan', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'isaisic587+5@gmail.com', '305-555-0720',true,'1983-07-12 21:30:55.888');
insert into user (id,role, username, password, email, mobile,enabled,last_password_reset_date) values (6,'Company','agropur', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'isaisic587+6@gmail.com', '305-555-0720',true,'1983-07-12 21:30:55.888');
insert into user (id,role, username, password, email, mobile,enabled,last_password_reset_date) values (7,'Company','agrokor', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'isaisic587+7@gmail.com', '305-555-07201',true,'1983-07-12 21:30:55.888');
insert into user (id,role, username, password, email, mobile,enabled,last_password_reset_date) values (8,'Company','agrovet', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'isaisic587+8@gmail.com', '305-555-07201',true,'1983-07-12 21:30:55.888');
insert into user (id,role, username, password, email, mobile,enabled,last_password_reset_date) values (9,'Company','agrokom', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'isaisic587+9@gmail.com', '305-555-07201',false,'1983-07-12 21:30:55.888');
insert into user (id,role, username, password, email, mobile,enabled,last_password_reset_date) values (10,'Company','agro', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'isaisic587+10@gmail.com', '305-555-07201',false,'1983-07-12 21:30:55.888');
insert into user (id,role, username, password, email, mobile,enabled,last_password_reset_date) values (11,'Company','agrofirm', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'isaisic587+11@gmail.com', '305-555-07201',false,'1983-07-12 21:30:55.888');
insert into user (id,role, username, password, email, mobile,enabled,last_password_reset_date) values (12,'Company','agrocomp', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'isaisic587+12@gmail.com', '305-555-07201',false,'1983-07-12 21:30:55.888');
insert into user (id,role, username, password, email, mobile,enabled,last_password_reset_date) values (13,'Company','agropost', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'isaisic587+13@gmail.com', '305-555-07201',false,'1983-07-12 21:30:55.888');


insert into user_authority (user_id,authority_id) values (1,1);
insert into user_authority (user_id,authority_id) values (2,2);
insert into user_authority (user_id,authority_id) values (3,2);
insert into user_authority (user_id,authority_id) values (4,2);
insert into user_authority (user_id,authority_id) values (5,2);
insert into user_authority (user_id,authority_id) values (6,3);
insert into user_authority (user_id,authority_id) values (7,3);
insert into user_authority (user_id,authority_id) values (8,3);
insert into user_authority (user_id,authority_id) values (9,3);
insert into user_authority (user_id,authority_id) values (10,3);
insert into user_authority (user_id,authority_id) values (11,3);
insert into user_authority (user_id,authority_id) values (12,3);
insert into user_authority (user_id,authority_id) values (13,3);

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

insert into address(id, city, country,street, zip_code)
values (2, 'Beograd', 'Srbija', 'Mileševska 3','11000');

insert into address(id, city, country,street, zip_code)
values (3, 'Subotica', 'Srbija', 'Banatska 2','24000');


insert into company(id, name, reg_num_of_company, address_id)
values (6, 'Agropur', '8542243320', 1);

insert into company(id, name, reg_num_of_company, address_id)
values (7, 'Agrokor', '8542243320', 2);

insert into company(id, name, reg_num_of_company, address_id)
values (8, 'Agrovet', '8542243320', 3);

insert into company(id, name, reg_num_of_company, address_id)
values (9, 'Agrokom', '8522320', 3);

insert into company(id, name, reg_num_of_company, address_id)
values (10, 'Agro', '8522320', 3);

insert into company(id, name, reg_num_of_company, address_id)
values (11, 'Agrofirm', '8522320', 3);

insert into company(id, name, reg_num_of_company, address_id)
values (12, 'Agrocomp', '8522320', 3);

insert into company(id, name, reg_num_of_company, address_id)
values (13, 'Agropost', '8522320', 3);


insert into product(id, name, additional_description,picture,registered_user_id)
values (1,'Prikolica', 'Prikolica je ocuvana i u dobrom je stanju, tehnicki je ispravna', '/assets/mechanization/trailer.jpg', 2);

insert into product(id, name, additional_description,picture,registered_user_id)
values (2,'Rasipač' ,'Rasipač ima kapacitet 1400kg. Boja je fabrička. Nema oštećenja.', '/assets/mechanization/rasipac.jpg', 2);

insert into product(id, name, additional_description,picture,registered_user_id)
values (3, 'Pšenica','Psenica je sveza', '/assets/products/wheat.jpg', 2);

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

insert into product(id, name, additional_description,picture,company_id)
values (19,'Kombajn', 'Na prodaju polovni Zmaj kombajn u odličnom stanju! Motor je u odličnom stanju, a kombajn je redovno održavan, što garantuje dug vek trajanja.Ovaj pouzdani kombajn je idealan za efikasno žetvu i obradu vaših poljoprivrednih kultura', '/assets/mechanization/kombajn-zmaj.jpg', 6);

insert into product(id, name, additional_description,picture,company_id)
values (20,'Korpa', 'Na prodaju polovna korpa za traktor u odličnom stanju! Ova korpa je idealna za prevoz tereta na vašem imanju ili farmi.Sa jednostavnim priključkom za traktor, lako je montirati i koristiti.', '/assets/mechanization/korpa.jpg', 6);

insert into product(id, name, additional_description,picture,company_id)
values (21,'Krunjač', 'Krunjač je namenjen za krunjenje kukuruza u klipu. Kukuruz u klipu se ubacuje u usipni koš gde ga orebljeni valjak kruni. Ekscentar sito koje horizontalno osciluje, vrši odvajanje zrna od kočanjke. Zavisno od veličine klipa, podešavanje rastojanje. ', '/assets/mechanization/krunjac.jpg', 6);

insert into product(id, name, additional_description,picture,company_id)
values (22,'Traktor', 'Na prodaju Lamborghini traktor, sinonim za izuzetnu snagu i performanse! Ovaj traktor je opremljen najnovijom tehnologijom i snažnim motorom, obezbeđujući visok nivo efikasnosti. Udobna kabina čine rad sa njim pravim zadovoljstvom.', '/assets/mechanization/lamborghini.jpg', 6);

insert into product(id, name, additional_description,picture,registered_user_id)
values (23,'Kruška', 'Savršena kruška viljamovka čeka na vas! Otkrijte autentičan ukus tradicije uz našu vrhunsku krušku viljamovku. Naša viljamovka nudi bogat i voćni karakter, savršen za uživanje ili poklon voljenim osobama. Okusite prirodnu lepotu kruške .', '/assets/products/viljamovka.jpg', 2);

insert into product(id, name, additional_description,picture,company_id)
values (24,'Krastavac', 'Naši organski krastavci su uzgajani sa pažnjom prema prirodi. Probajte ih i osetite razliku u ukusu i kvalitetu! Zdravlje dolazi u zelenom pakovanju! Krastavci su bogati vodom, vitaminima i vlaknima - savršen izbor za hidrataciju i očuvanje zdravlja', '/assets/products/krastavac1.jpg', 6);

insert into product(id, name, additional_description,picture,company_id)
values (25,'Soja', 'Za zdravu ishranu, birajte soju. Bogata proteinima, bez holesterola, i odlična za vegane i vegetarijance.Neka soja postane vaša svakodnevna navika. Ukusno i hranljivo - isprobajte je i osetite razliku.Dodajte raznovrsnost svojim obrocima.', '/assets/products/soja1.jpg', 7);

insert into product(id, name, additional_description,picture,registered_user_id)
values (26,'Soja', 'Soja - tajna dugovečnosti! Neka vaša ishrana bude obogaćena hranljivim svojstvima ovog čuda prirode.Otkrijte čuda soje - prirodni izvor proteina i zdravlja! Naša soja je savršen izbor za uravnoteženu ishranu.Poboljšajte svoje zdravlje danas!', '/assets/products/soja4.jpg', 3);

insert into product(id, name, additional_description,picture,registered_user_id)
values (27,'Kupus', 'Svež i hrskav kupus je ključ za ukusan i zdrav obrok! Otkrijte sve mogućnosti koje nudi ovaj superhranljivi sastojak. Kupus je prirodno bogat vitaminima i vlaknima. Uključite ga u svoju ishranu za jačanje imunološkog sistema i očuvanje zdravlja.', '/assets/products/kupus2.jpg', 4);

insert into product(id, name, additional_description,picture,registered_user_id)
values (28,'Jabuka', 'Uživajte u svežini prirode uz naše sočne i hrskave jabuke, savršen dodatak svakodnevnoj ishrani. Jabuke su bogate vlaknima i vitaminima, čineći ih idealnim izborom za zdravu ishranu i očuvanje vitalnosti.Naša ponuda jabuka donosi vam raznolikost ukusa.', '/assets/products/ajdared.jpg', 5);

insert into product(id, name, additional_description,picture,company_id)
values (29,'Jabuka', 'Uživajte u svežini prirode uz naše sočne i hrskave jabuke, savršen dodatak svakodnevnoj ishrani. Jabuke su bogate vlaknima i vitaminima, čineći ih idealnim izborom za zdravu ishranu i očuvanje vitalnosti.Naša ponuda jabuka donosi vam raznolikost ukusa.', '/assets/products/jabuka-green.jpg', 7);

insert into product(id, name, additional_description,picture,company_id)
values (30,'Koncentrat', 'Najbolji izbor za vaše životinje - naš visokokvalitetni koncentrat je ključ za njihovo zdravlje i vitalnost.Poverite se našem koncentratu kako biste osigurali da vaše životinje budu u najboljoj formi. Neka domaće životnije uživaju u svakom zalogaju!', '/assets/materials/koncentrat.jpg', 6);

insert into product(id, name, additional_description,picture,company_id)
values (31,'Veštačko đubrivo', 'Naše đubrivo je ključ za rast i razvoj vaših biljaka. Pružite im sve neophodne hranljive materije za obilan rod. Osigurajte plodno i bujno zemljište uz naše visokokvalitetno veštačko đubrivo. Vaše biljke zaslužuju najbolje!', '/assets/materials/djubrivo.jpg', 8);

insert into product(id, name, additional_description,picture,company_id)
values (32,'Seme šargarepe', 'Naša seme šargarepe je pažljivo odabrano kako bi vaše baštovanstvo bilo uspešno i donelo obilan rod. Neka vaša bašta zablista uz šargarepe koje rastu iz našeg vrhunskog semena. Spremite se za najslađu berbu!', '/assets/materials/seme-sargarepa.jpg', 7);

insert into product(id, name, additional_description,picture,company_id)
values (33,'Pesticid krompir', 'Zaštitite svoj krompir i ostvarite maksimalan prinos uz našu efikasnu liniju pesticida. Vaša bašta zaslužuje najbolju negu! Naši pesticidi su razvijeni uz najnoviju tehnologiju kako bi se obranili od štetnika i bolesti. Garantujemo zdrav i obilan urod.', '/assets/materials/pesticid-krompir.jpg', 6);

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

insert into product_pictures(product_id, pictures)
values (19, '/assets/mechanization/kombajn-zmaj.jpg');

insert into product_pictures(product_id, pictures)
values (19, '/assets/mechanization/kombajn-zmaj1.jpg');

insert into product_pictures(product_id, pictures)
values (20, '/assets/mechanization/korpa.jpg');

insert into product_pictures(product_id, pictures)
values (20, '/assets/mechanization/korpa1.webp');

insert into product_pictures(product_id, pictures)
values (21, '/assets/mechanization/krunjac.jpg');

insert into product_pictures(product_id, pictures)
values (21, '/assets/mechanization/krunjac1.jpeg');

insert into product_pictures(product_id, pictures)
values (22, '/assets/mechanization/lamborghini.jpg');

insert into product_pictures(product_id, pictures)
values (22, '/assets/mechanization/lamborghini1.jpg');

insert into product_pictures(product_id, pictures)
values (23, '/assets/products/viljamovka.jpg');

insert into product_pictures(product_id, pictures)
values (23, '/assets/products/viljamovka1.jpg');

insert into product_pictures(product_id, pictures)
values (24, '/assets/products/krastavac1.jpg');

insert into product_pictures(product_id, pictures)
values (24, '/assets/products/krastavac.jpg');

insert into product_pictures(product_id, pictures)
values (25, '/assets/products/soja1.jpg');

insert into product_pictures(product_id, pictures)
values (25, '/assets/products/soja.jpg');

insert into product_pictures(product_id, pictures)
values (26, '/assets/products/soja2.jpg');

insert into product_pictures(product_id, pictures)
values (26, '/assets/products/soja4.jpg');

insert into product_pictures(product_id, pictures)
values (27, '/assets/products/kupus2.jpg');

insert into product_pictures(product_id, pictures)
values (27, '/assets/products/kupus.jpg');

insert into product_pictures(product_id, pictures)
values (28, '/assets/products/ajdared.jpg');

insert into product_pictures(product_id, pictures)
values (28, '/assets/products/ajdared1.jpg');

insert into product_pictures(product_id, pictures)
values (29, '/assets/products/jabuka-green.jpg');

insert into product_pictures(product_id, pictures)
values (29, '/assets/products/jabuka-green1.jpg');

insert into product_pictures(product_id, pictures)
values (30, '/assets/materials/koncentrat.jpg');

insert into product_pictures(product_id, pictures)
values (31, '/assets/materials/djubrivo.jpg');

insert into product_pictures(product_id, pictures)
values (32, '/assets/materials/seme-sargarepa.jpg');

insert into product_pictures(product_id, pictures)
values (33, '/assets/materials/pesticid-krompir.jpg');

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, registered_user_id)
values(1, '2023-02-11 19:00:00', 'Traktorska prikolica', 'Mehanizacija', 'Prikolice', 1500000, 1, 'Novi Sad', '0675542857',true, 1, 2);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, registered_user_id)
values(2, '2023-03-13 17:00:00', 'Kultivator u odličnom stanju', 'Mehanizacija', 'Priključne mašine', 240000, 1, 'Beograd', '0675542857',true, 2, 2);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable,  product_id, registered_user_id)
values(3, '2023-02-15 12:00:00', 'Pšenica rod 2023 1000 kg', 'Poljoprivredni proizvod', 'Žitarice', 99000, 1, 'Kraljevo', '0675542857',true, 3, 2);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, registered_user_id)
values(4, '2023-07-17 16:00:00', 'Domaći paradaj 40kg', 'Poljoprivredni proizvod', 'Povrće', 6000, 1, 'Novi Sad', '0675542857',true, 4, 2);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, registered_user_id)
values(5, '2023-06-18 19:00:00', 'Traktor John Deer', 'Mehanizacija', 'Traktori', 9400000, 1, 'Novi Sad', '0675542857',true, 5, 4);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, registered_user_id)
values(6, '2023-02-22 11:00:00', 'Kombajn New Holland', 'Mehanizacija', 'Kombajni', 8880000, 1, 'Novi Sad', '0675542857',true, 6, 3);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, registered_user_id)
values(7, '2023-05-17 15:00:00', 'Prikolica 5T', 'Mehanizacija', 'Prikolice', 1100000, 1, 'Novi Sad', '0675542857',true, 7, 2);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, registered_user_id)
values(8, '2023-07-28 12:00:00', 'Setvospremač, kao nov', 'Mehanizacija', 'Priključne mašine', 250000, 1, 'Smederevo', '0648575857',true, 8, 5);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, registered_user_id)
values(9, '2023-06-24 14:00:00', 'Prskalica, 800L', 'Mehanizacija', 'Priključne mašine', 250000, 1, 'Vranje', '0649511657',true, 9, 3);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, registered_user_id)
values(10, '2023-07-02 12:00:00', 'Traktor ArmaTrac', 'Mehanizacija', 'Traktori', 1700000, 1, 'Beograd', '0639511688',true, 10, 4);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, registered_user_id)
values(11, '2023-07-02 13:00:00', 'Laka drljača, Tupanjac', 'Mehanizacija', 'Priključne mašine', 180000, 1, 'Subotica', '066689257',true, 11, 2);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, registered_user_id)
values(12, '2023-06-15 11:00:00', 'Prodaje se sejalica', 'Mehanizacija', 'Priključne mašine', 240000, 1, 'Vršac', '0649518957',true, 12, 5);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, registered_user_id)
values(13, '2023-05-25 10:00:00', 'Prodaje se setvospremač', 'Mehanizacija', 'Priključne mašine', 380000, 1, 'Sremska Mitrovica', '0612578965',true, 13, 4);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, registered_user_id)
values(14, '2023-08-02 22:00:00', 'Prodaje se elevator', 'Mehanizacija', 'Mašine i alati', 90000, 1, 'Šabac', '0688532314',true, 14, 3);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, registered_user_id)
values(15, '2023-07-27 18:00:00', 'Prodaja motokultivatora', 'Mehanizacija', 'Mašine i alati', 120000, 1, 'Sombor', '0669832267',true, 15, 5);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, company_id)
values(16, '2023-06-11 18:00:00', 'Prodaja traktora', 'Mehanizacija', 'Traktori', 7500000, 1, 'Kragujevac', '065782261',true, 16, 6);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, company_id)
values(17, '2023-06-01 18:00:00', 'Prodaja sejalice', 'Mehanizacija', 'Priključne mašine', 1200000, 1, 'Leskovac', '0635629832',true, 17, 6);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, company_id)
values(18, '2023-07-01 18:00:00', 'Prodaja sejalice', 'Mehanizacija', 'Priključne mašine', 1200000, 1, 'Zrenjanin', '0635629832',false, 18, 6);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, company_id)
values(19, '2023-08-01 18:00:00', 'Prodaja se kombajn', 'Mehanizacija', 'Kombajni', 2800000, 1, 'Kragujevac', '0635752683',true, 19, 6);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, company_id)
values(20, '2023-08-08 18:00:00', 'Prodaje se korpa', 'Mehanizacija', 'Priključne mašine', 200000, 1, 'Subotica', '0678522362',true, 20, 6);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, company_id)
values(21, '2023-09-08 18:00:00', 'Krunjač kao nov', 'Mehanizacija', 'Mašine i alati', 80000, 1, 'Pirot', '0628524446',true, 21, 6);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, company_id)
values(22, '2023-08-08 18:00:00', 'Prodaje se traktor', 'Mehanizacija', 'Traktori', 8200000, 1, 'Prokuplje', '0647852889',true, 22, 6);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, registered_user_id)
values(23, '2023-08-08 18:00:00', 'Kuška viljamovka 35 kg', 'Poljoprivredni proizvod', 'Voće', 7000
, 1, 'Novi Sad', '0647852889',true, 23, 2);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, company_id)
values(24, '2023-09-08 18:00:00', 'Sveži krastavci 40 kg', 'Poljoprivredni proizvod', 'Povrće', 5600, 1, 'Novi Sad', '064741238',true, 24, 6);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, company_id)
values(25, '2023-08-22 18:00:00', 'Soja - Vulkan 2000 kg', 'Poljoprivredni proizvod', 'Žitarice', 110000, 1, 'Beograd', '0677367555',true, 25, 7);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, registered_user_id)
values(26, '2023-08-14 18:00:00', 'Soja - Kraljica 900 kg', 'Poljoprivredni proizvod', 'Žitarice', 49500, 1, 'Kragujevac', '0678233699',true, 26, 3);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, registered_user_id)
values(27, '2023-09-14 18:00:00', 'Kupus - Futoški 100 kg', 'Poljoprivredni proizvod', 'Povrće', 7000, 1, 'Novi Sad', '0612112234',true, 27, 4);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, registered_user_id)
values(28, '2023-08-24 18:00:00', 'Jabuka - Ajdared 80 kg', 'Poljoprivredni proizvod', 'Voće', 8800, 1, 'Beograd', '0624447786',true, 28, 5);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, company_id)
values(29, '2023-08-24 18:00:00', 'Jabuka - Granny Smith 25 kg', 'Poljoprivredni proizvod', 'Voće', 3250, 1, 'Subotica', '0677367555',true, 29, 7);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, company_id)
values(30, '2023-08-17 18:00:00', 'Hrana za svinje', 'Poljoprivredni materijal', 'Stočna hrana', 1200, 1, 'Novi Sad', '0698875236',true, 30, 6);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, company_id)
values(31, '2023-07-17 18:00:00', 'Veštačko đubrivo', 'Poljoprivredni materijal', 'Đubriva', 3960, 1, 'Subotica', '0697785200',true, 31, 8);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, company_id)
values(32, '2023-06-17 18:00:00', 'Seme šargarepe', 'Poljoprivredni materijal', 'Semena', 220, 1, 'Beograd', '0677367555',true, 32, 7);

insert into announcement(id, date, title, category, subcategory, price, quantity, city, mobile_number, enable, product_id, company_id)
values(33, '2023-07-11 18:00:00', 'Pesticid za krompir, paradajz', 'Poljoprivredni materijal', 'Zaštita bilja', 1000, 1, 'Novi Sad', '0698875236',true, 33, 6);

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
insert into advertisement(id, title, text,price,start_date, end_date, enable, image, company_id)
values (6,'Neaktivan, Vrhunski kvalitet', 'Savršen alat za svakog poljoprivrednika - naš plug nudi izvanrednu izdržljivost i dugotrajnost.Nema više muka pri pripremi zemlje - uz naš plug, to će biti zadovoljstvo!', 800, '2023-09-10 21:30:55.888', '2024-01-01 21:30:55.888', false, '/assets/advertisement/plug1.jpg', 6);


