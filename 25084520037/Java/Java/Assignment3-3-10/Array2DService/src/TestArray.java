
public class TestArray {

	public static void main(String[] args)
	{
		int[][]arr=new int[3][];
         Array2D.accept2DArray(arr);
         Array2D.display2DArray(arr);
         System.out.println("Rowwise Addition: ");
         int[] rowSum = Array2D.rowwiseAddition(arr);
         for(int val:rowSum)
         {
        	 System.out.println(val+"\t");
         }
         
         System.out.println();
	}

}
