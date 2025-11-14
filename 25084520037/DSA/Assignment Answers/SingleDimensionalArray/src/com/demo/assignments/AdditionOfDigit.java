package com.demo.assignments;
import java.util.*;
public class AdditionOfDigit {
	
	public static int additionOfDigit(int num) {
		int sum =0;
		while(num > 0) {
			sum = sum + num%10;
			num /= 10;
		}
		return sum;
		
	}

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("enter the size of arry");
		
		int size = sc.nextInt();
		
		int arr[] = new int[size];
		System.out.println("Enter " + size + " numbers:");
        for (int i = 0; i < size; i++) {
            arr[i] = sc.nextInt();
        }
		
		System.out.println("Enter " + size + "numbers");
		for(int i=0; i <size; i++) {
			int sum = additionOfDigit(arr[i]);
			System.out.println("Number: "+ arr[i] + "->sum of digit " + sum);
		}
		sc.close();
		
		
	}

}
