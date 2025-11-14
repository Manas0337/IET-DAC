package com.demo.assignments;

public class ArraysFunctions {

    
    public static int additionOfDigit(int num) {
        int sum = 0;
        num = Math.abs(num);
        while (num > 0) {
            sum += num % 10;
            num /= 10;
        }
        return sum;
    }

    
    public static boolean isPrime(int num) {
        if (num <= 1) return false;
        if (num == 2) return true;
        if (num % 2 == 0) return false;
        int limit = (int) Math.sqrt(num);
        for (int i = 3; i <= limit; i += 2) {
            if (num % i == 0) return false;
        }
        return true;
    }

    
    public static long factOfPrimeNum(int num) {
        if (!isPrime(num)) return -1;
        long fact = 1L;
        for (int i = 2; i <= num; i++) {
            fact *= i;
        }
        return fact;
    }

    
    public static int maxPrimeNumber(int[] arr) {
        int max = -1;
        for (int val : arr) {
            if (isPrime(val) && val > max) {
                max = val;
            }
        }
        return max;
    }

    
    public static int reverseNumber(int num) {
        int rev = 0;
        int x = Math.abs(num);
        while (x > 0) {
            rev = rev * 10 + x % 10;
            x /= 10;
        }
        return num < 0 ? -rev : rev;
    }
}
