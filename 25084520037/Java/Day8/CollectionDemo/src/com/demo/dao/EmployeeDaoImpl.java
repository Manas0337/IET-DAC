package com.demo.dao;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Collectors;

import com.demo.beans.Employee;

public class EmployeeDaoImpl implements EmployeeDao {
    static List<Employee> elist;
    static {
    	elist=new ArrayList<>();
    	elist.add(new Employee(100,"Manjiri",45678,LocalDate.of(2024, 11, 12)));
    	elist.add(new Employee(101,"Gauri",55678,LocalDate.of(2023, 11, 12)));
    	elist.add(new Employee(103,"Kanchan",35678,LocalDate.of(2020, 11, 12)));
    }
	@Override
	public boolean save(Employee e) {
		elist.add(e);
		return true;
		``
	}
	@Override
	public List<Employee> findAll() {
		return elist;
	}
	@Override
	public Employee findById(int eid) {
		//indexOf calls equals method internally 
		//equals method is written in employee class
		int pos=elist.indexOf(new Employee(eid));
		if(pos!=-1) {
			return elist.get(pos);
		}
		return null;
	}
	@Override
	public boolean removeById(int eid) {
		//remove calls equals method internally 
				//equals method is written in employee class
		return elist.remove(new Employee(eid));
	}
	
	public int deleteBySal(double sal) {
		int cnt=0;
		Iterator<Employee> it1=elist.iterator();
		while(it1.hasNext()) {
			Employee emp=it1.next();
			if(emp.getSal()==sal) {
				it1.remove();
				cnt++;
			}
		}
		return cnt;
		
	}
	

	public boolean updateSal( double newSal,double upSal) {
	    int count = 0;
	    for (Employee emp : elist) {
	        if (emp.getSal() == newSal) {
	        	emp.setSal(upSal);
	        	count++;
	        }
	    }
	    if(count<0) {
	    	return true;
	    }
	    return false;
	}

	public void sortBySal() {
		for(int i=0;i<e.list.size()-1;i++) {
			Employee e=e.list.get(i);
			for(int)
		}
	}
		
		
		
	
	@Override
	public List<Employee> findByName(String nm) {
		/*List<Employee> temp=new ArrayList<>();
		for(Employee e:elist) {
			if(e.getEname().equals(nm)) {
				temp.add(e);
			}
		}*/
		List<Employee> temp= elist.stream()
		                    .filter(emp->emp.getEname().equals(nm))
		                    .collect(Collectors.toList());
		
		if(temp.size()>0) {
			return temp;
		}
		return null;
	}
	public List<Employee> findBySal(double sal){
		List<Employee>temp= elist.stream()
				            .filter(emp->emp.getSal()==(sal))
				            .collect(Collectors.toList());
		
		if(temp.size()>0) {
			return temp;
		}
		return null;
	}
//	@Override
//	public boolean deleteById(double sal) {
//		// TODO Auto-generated method stub
//		return false;
//	

}
