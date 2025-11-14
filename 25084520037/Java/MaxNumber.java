import java.util.Scanner;

public static void main(String args[])
{
Scanner sc = new Scanner(System.in);
System.out.println("Enter First number");
int n1=sc.nextInt();
System.out.println("Enter Second Number");
int n2 = sc.nextInt();
System.out.println("Enter Third Number");
int n3 = sc.nextInt();

if(n1==n2 && n2==n3)
{
System.out.println("Entered number is equal");
}
else if(n1>n2 && n1>n3)
{
System.out.println("First Number is Greater:"+n1);
} 
else if(n2>n1 && n2>n3)
{
System.out.println("Second Number is Greater:"+n2);
}
else
{
System.out.println("Third Number is Greater:"+n3);
}
}