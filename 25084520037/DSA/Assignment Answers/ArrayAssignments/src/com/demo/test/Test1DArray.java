package com.demo.test;

import java.util.Scanner;

import com.demo.array.My1DArray;

public class Test1DArray {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		My1DArray ob = new My1DArray();
		ob.add(2);
		ob.add(5);
		ob.add(7);
		ob.add(9);
		ob.add(45);
		
		
		int ch;
		 while(true) {
	            System.out.println("\nMyArray Menu===");
	            System.out.println("1.Add element at end");
	            System.out.println("2.Display array");
	            System.out.println("3.Add element at position");
	            System.out.println("4.Delete by position");
	            System.out.println("5.Delete by value");
	            System.out.println("6.Search by value");
	            System.out.println("7.Rotate array (left/right)");
	            System.out.println("8.Reverse array (in-place)");
	            System.out.println("9.Find maximum");
	            System.out.println("10.Find sum of elements");
	            System.out.println("11.Digit sum of each element");
	           
	            
	            System.out.println("12.Exit");
	            
	            System.out.println("13. Find factorial of only prime  numbers in the array ");
	            
	            System.out.println("14.Find maximum prime number in the array ");
	            System.out.print("Enter  choice: ");
	            ch = sc.nextInt();

	            switch (ch) {
	            
	            
	            case 1->{
	            	System.out.println("Enter Value to add in Array");
	            	int x =sc.nextInt();
	            	boolean sts =ob.add(x);
	            	if(sts) {
	            		System.out.println("Value Added in Array!");
	            	}
	            	else {
						System.out.println("Not added valueb Array is full !!!");
					}
	            }
	            
	            case 2->{
	            	System.out.println(ob);
	            	System.out.println("Size "+ob.getSize()+" Capacity: "+ob.getCapacity());
	            }
	            case 10->{
	            	double sum=ob.getSumElements();
	            	System.out.println("Sum of elements "+ sum);
	            }
	            case 11->{
	            	
	            	My1DArray sum=ob.digitSumOfAllElements();
	            	System.out.println("Digit sum of each element \n"+sum);
	            }
	            case 12->{
	            	System.out.println("Thnak uu");
	            	System.exit(0);
	            }
	            case 13->{
	            	
	            	My1DArray fact = ob.factOfPrime();
	     
	            	System.out.println("Factoraial of each array Elements\n"+fact);
	            }
	            case 14->{
	            	int max = ob.findMaxPrime();
	            	System.out.println("Maximum Number of Prime in Array :\n"+max);
	            }
	             default ->{
	            	 System.out.println("Invalid Choice !!!!!!!!!!");
	             }
	            }
	            
	            
	            }
		

	}

}
