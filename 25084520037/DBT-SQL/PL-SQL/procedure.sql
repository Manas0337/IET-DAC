drop procedure if exists pro1;
delimiter $
create procedure pro1()
BEGIN
	select "Hello World " R1;
end $
delimiter ;

drop procedure if exists pro1;
delimiter $
create procedure pro1()
BEGIN
     select * from dept;
end $
delimiter;