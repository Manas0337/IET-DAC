import java.util.Scanner

public class Array2D {
     static void accept2DArray(int[][] arr)
     {
         Scanner sc = new Scanner(System.in);
    	 for(int i=0;i<arr.length;i++);
    	 int i;
		{
    	 System.out.println("Enter number of columns for row" +i);
    	 }
    	    int col =sc.nextInt();
    	    arr[i] = new int[col];
    	    for(int j=0;j<arr[i].length;j++)
    	    {
    	    System.out.println("Enter the value for "+i+","+j); 
    	    arr[i][j] = sc.nextInt();
    	    }
        }
  
public static void display2DArray(int[][] arr)
	{
		for(int i=0;i<arr.length;i++)
		{
			for(int j=0;j<arr[i].length;j++)
			{
				System.out.println(arr[i][j]+"\t");
			}
			System.out.println();
		}
	}
public static int[]rowwiseAddition(int[][] arr)
	{
	 int[]temp =new int[arr.length];
	 for(int i=0;i<arr.length;i++)
	{
		for(int j=0;j<arr.length;j++) 
		{
	      temp[i] += arr[i][j];
		}
    }
	     return temp;
	}
}


 
