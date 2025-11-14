package com.demo.test;

import java.util.List;
import java.util.Scanner;

import com.demo.beans.Employee;
import com.demo.service.EmployeeService;
import com.demo.service.EmployeeServiceImpl;

public class TestEmployeeManagementSystem {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		EmployeeService eservice=new EmployeeServiceImpl();
		int choice=0;
		do {
			System.out.println("1.add new employee\n2.display all\n3.search by id");
			System.out.println("4.Search by name\n5.update sal\n6.delete by id\n7.delete by salary");
			System.out.println("8.search by salary\n9.sort by salary\n10.exit\n choice: ");
			choice=sc.nextInt();
								
			switch(choice) {
			case 1->{
				boolean status=eservice.addNewEmployee();
				if(status) {
					System.out.println("added successfully");
				}else {
					System.out.println("not found");
				}
			}
			case 2->{
				List<Employee> elist=eservice.displayAll();
				//display data
				elist.forEach(System.out::println);
			}
			case 3->{
				System.out.println("enetr id for search");
				int eid=sc.nextInt();
				Employee e=eservice.searchById(eid);
				if(e!=null) {
					System.out.println(e);
				}else {
					System.out.println("not found");
				}
			}
			case 4->{
				System.out.println("enetr name for searching");
				String nm=sc.next();
				List<Employee> elst=eservice.findByName(nm);
				if(elst!=null) {
					elst.forEach(System.out::println);
				}else{
					System.out.println("not found");
				}
			}
			case 5 ->{
				System.out.println("Enter salary for Updation");
				double sal = sc.nextDouble();
				System.out.println("Enter updated salary ");
				double upSal = sc.nextDouble();
				boolean status = eservice.updateSal(sal,upSal);
				if(!status) {
					System.out.println("Updated Successfully");
				}
				else {
					System.out.println("not found");
				}
			}
			case 6->{
				System.out.println("enetr id for delete");
				int eid=sc.nextInt();
				boolean status=eservice.deleteById(eid);
				if(status) {
					System.out.println("deleted successfully");
				}else {
					System.out.println("not found");
				}
			}
			
			case 7->{
				System.out.println("enter salary to delete");
				double sal=sc.nextDouble();
				int result=eservice.deleteBySal(sal);
				if(result==0) {
					System.out.println("No result found");
				}else {
					System.out.println(result+ "deleted");
				}
			}
			
			case 8->{
				System.out.println("enter salary");
				double sal=sc.nextDouble();
				List<Employee> elst = eservice.findBySal(sal);
				if(elst!=null) {
					elst.forEach(System.out::println);
				}else {
					System.out.println("not found");
				}
			
				}
		
			case 9->{
				System.out.println("Sort by salary");
				double sal=sc.nextDouble();
				
			}
			
			case 10->{sc.close();
			     System.out.println("Thank you for visiting...."); 
			}
			default->{
				System.out.println("wrong choice");
			  
			
		}
			}
		}	
		while(choice!=10);
	}
}
	

	


