truncate table bharath
truncate table stud_datas
truncate table stud_details

use stud_table

insert into bharath(id,name,depart,mark) values(1,'Bharath','ECE',83);
insert into bharath(id,name,depart,mark) values(3,'Bala','CSC',87);
insert into bharath(id,name,depart,mark) values(5,'Bhavani','MECH',65);
insert into bharath(id,name,depart,mark) values(2,'Rajesh','CIVIL',77);
insert into bharath(id,name,depart,mark) values(6,'Anil','AUTO',66);
insert into bharath(id,name,depart,mark) values(7,'Anand','ECE',75);
insert into bharath(id,name,depart,mark) values(10,'Dhenral','CSC',63);
insert into bharath(id,name,depart,mark) values(4,'Vinoth','ECE',85);

alter table bharath change column mark percentage int

use nsb_bharath

update person_details set Name="Bharath" where id=4

/*SELECT person_details.Id, person_location.Area
FROM person_details
FULL OUTER JOIN person_location ON person.details.Id=person_location.Id 
ORDER BY person_details.Id;*/

SELECT Name FROM person_details
CROSS JOIN person_location

SELECT * FROM person_details
CROSS JOIN person_location


SELECT Id FROM person_details
UNION
SELECT Id FROM person_location;

SELECT Name FROM person_details
UNION 
SELECT Area FROM person_location;

SELECT Name FROM person_details
UNION ALL
SELECT Area FROM person_location;

SELECT MAX(Age) FROM person_details
SELECT MIN(Age) FROM person_details 
SELECT COUNT(Name) FROM person_details #Total number of rows 
SELECT AVG(State) FROM person_details #shows 0 no int values
SELECT AVG(Id) FROM person_details #Give avg integer values
SELECT SUM(Id) FROM person_details #Add Total number of int values

SELECT column_name(s)
FROM table_name
WHERE EXISTS
(SELECT column_name FROM table_name WHERE condition);

SELECT Area FROM person_location 
WHERE EXISTS (SELECT Name FROM person_details WHERE Id=person_location.Id AND Id=3)

SELECT Area FROM person_location 
WHERE EXISTS (SELECT Name FROM person_details WHERE Id=person_location.Id AND Id<3)


SELECT COUNT(Name), Name FROM person_details GROUP BY Name;
SELECT COUNT(Name), Age FROM person_details GROUP BY Age;
SELECT COUNT(Name), Age FROM person_details GROUP BY Name;

SELECT Name FROM person_details GROUP BY Age;
SELECT Name FROM person_details GROUP BY Name;

SELECT * FROM person_details ORDER BY Name asc;
SELECT Name FROM person_details ORDER BY Name asc;
SELECT * FROM person_details ORDER BY Name desc;

SELECT City FROM person_details 
GROUP BY Id HAVING Id<20; #WHERE is applied before GROUP BY, HAVING is applied after (and can filter on aggregates).

SELECT Name FROM person_details GROUP BY Age HAVING Age>30;

















