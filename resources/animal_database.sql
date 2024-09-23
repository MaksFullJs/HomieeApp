drop database if exists database_animals;
create database if not exists database_animals;

use database_animals;

create table animal (
	id int not null auto_increment,
    name varchar(35) not null,
    text varchar(70) not null,
    description varchar(400) not null,
    first_characteristic varchar(50) not null,
    second_characteristic varchar(50) not null,
    image varchar(100) not null,
    daily_expense int not null,
    anim_type varchar(50) not null,
    constraint PK_animal primary key (id)
);

insert into animal (name, text, description, first_characteristic, second_characteristic, image, daily_expense, anim_type) values
('Cat', 'open-admission animal shelter and its rescue partners', 'Friends of San Francisco Animal Care and Control 
		(FSFACC) is the only organization dedicated to raising funds for the City’s municipal, open-admission animal shelter 
        and its rescue partners in order to enhance or establish programs and services that benefit animals, and serve and educate the public.',
        'friendly with children', 'funny', '/images/cats.jpg', 10, 'Mammal'),
('Arama', 'open-admission animal shelter and its rescue partners', 'Friends of San Francisco Animal Care and Control 
		(FSFACC) is the only organization dedicated to raising funds for the City’s municipal, open-admission animal shelter 
        and its rescue partners in order to enhance or establish programs and services that benefit animals, and serve and educate the public.',
        'friendly with children', 'funny', '/images/fishes.jpg', 25, 'Mammal'),
('Parrot', 'open-admission animal shelter and its rescue partners', 'Friends of San Francisco Animal Care and Control 
		(FSFACC) is the only organization dedicated to raising funds for the City’s municipal, open-admission animal shelter 
        and its rescue partners in order to enhance or establish programs and services that benefit animals, and serve and educate the public.',
        'friendly with children', 'funny', '/images/parrots.jpg', 50, 'Bird'),
('Turtle', 'open-admission animal shelter and its rescue partners', 'Friends of San Francisco Animal Care and Control 
		(FSFACC) is the only organization dedicated to raising funds for the City’s municipal, open-admission animal shelter 
        and its rescue partners in order to enhance or establish programs and services that benefit animals, and serve and educate the public.',
        'friendly with children', 'funny', '/images/turtles.jpg', 12, 'Reptile');
