


create table person_location
( 
Id int, 
Postal_code varchar(6),
Area varchar(20),
foreign key(Id) references person_details(Id)
)

insert into person_location(Id,Postal_code,Area) values(1,'015','Saidapet')
insert into person_location(Id,Postal_code,Area) values(1,'014','Shollinganallur')
insert into person_location(Id,Postal_code,Area) values(3,'011','Navalur')
insert into person_location(Id,Postal_code,Area) values(4,'017','Perungudi')
insert into person_location(Id,Postal_code,Area) values(5,'019','Madhya Kailash')
insert into person_location(Id,Postal_code,Area) values(5,'010','Guindy')
insert into person_location(Id,Postal_code,Area) values(6,'018','Velachery')
insert into person_location(Id,Postal_code,Area) values(7,'014','Karappakam')
insert into person_location(Id,Postal_code,Area) values(6,'012','Tambaram')
insert into person_location(Id,Postal_code,Area) values(8,'016','Thoraipakkam')

use nsb_bharath
use stud_table
truncate table stud_datas

truncate table person_location

delete  from person_location where Area='Saidapet'

alter table person_details add column State nvarchar(15) default 'Tamilnadu'

alter table person_details add column Age int not null check (Age<=55)

update person_details set Age='66'


select person_details.Age,person_details.Id, person_details.Name,person_location.Id, person_location.Postal_code
from person_details
inner join person_location on person_details.Id = person_location.Id

update person_details set Age='35' where id=2

select person_details.Age,person_details.Id, person_details.Name,person_location.Id, person_location.Postal_code
from person_details
left join person_location on person_details.Id = person_location.Id

select person_details.Age,person_details.Id, person_details.Name,person_location.Id, person_location.Postal_code
from person_details
right join person_location on person_details.Id = person_location.Id



select person_details.Age,person_details.Id, person_details.Name,person_location.Id, person_location.Postal_code
from person_details
join person_location on person_details.Id = person_location.Id









