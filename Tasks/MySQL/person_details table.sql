create database Nsb_Bharath

use Nsb_Bharath
create table person_details
( 
Id int, 
Name varchar(30),
City varchar(20),
primary key (Id) 
)

insert into person_details (Id,Name,City) values (1,'Bharath','Chennai')
insert into person_details (Id,Name,City) values (2,'Vinoth','Nagarkoil')
insert into person_details (Id,Name,City) values (3,'Saravanan','Trichy')
insert into person_details (Id,Name,City) values (4,'Guna','Madurai')
insert into person_details (Id,Name,City) values (5,'Kumar','Theni')
insert into person_details (Id,Name,City) values (6,'Anil','Thirupur')
insert into person_details (Id,Name,City) values (7,'Babu','Andhra')
insert into person_details (Id,Name,City) values (8,'Nsb','Chennai')
insert into person_details (Id,Name,City) values (9,'Prasanth','Nellore')
insert into person_details (Id,Name,City) values (10,'Senthil','Salem')

alter table person_details add column Mobile varchar(10)

update person_details set Mobile='9856456235' where id=3
