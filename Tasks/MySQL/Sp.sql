CREATE PROCEDURE `Submit` ()
BEGIN
insert into bharath(Name, Age, Email, Mobile, Department, Grade) 
values(sp_name, sp_age, sp_email, sp_mob, sp_dept, sp_grade);
END
