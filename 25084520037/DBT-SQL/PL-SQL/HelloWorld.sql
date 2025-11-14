drop procedure if exists pro1;
delimiter $
create procedure pro1()
BEGIN 
     select "Hello World";
     end $
     delimiter ;
     