import java.util.Scanner;
public class TwoDArray 
{
	
public static void acceptData(int[][]arr) 
{
Scanner sc=new Scanner(System.in);
   for(int i=0;i<arr.length;i++)
   {
	  for(int j=0;j<arr.length;j++)
      {
	   System.out.println("Enter data for row "+i+" column: "+j);
	   arr[i][j]=sc.nextInt();
      }
   }
}
public static void displaydata(int[][]arr)
{
	for(int i=0;i<arr.length;i++)
	{
	  for(int j=0;j<arr.length;j++)
	  {
		  System.out.print(arr[i][j]+"\t");
	  }
	  System.out.println();
	}
	System.out.println("-----------------------------");
	}
 
//Add All Numbers
    public static int addNumbers(int arr[][]) 
    {
    	int sum = 0;
    	for(int i =0; i <arr.length; i++)
    	{
    		for(int j=0;j < arr[i].length; j++)
    		{
    			sum += arr[i][j];
    		}
        }
    	return sum;
    }
////Rowwise Addition
//    public static int[] addRowwise(int[][])
//    {
//    	int[]temp=new int[arr.length]
//        for(int i=0;i<arr.length;i++)
//        {
//        	for(int j=0;j<arr.length;i++)
//        	{
//        		
//        	}
//        }
//    }
    
    
    public static void main(String[] args) 
    {
        int[][] arr = new int[3][3];

        // Accept elements
        acceptData(arr);

        // Display array
        displaydata(arr);

        // Print sum
        System.out.println("Addition of Array is: " + addNumbers(arr));
    }
}


