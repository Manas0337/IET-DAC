using System.ComponentModel.Design;

namespace _03Demo_DataType
{
    internal class Program
    {
        static void Main(string[] args)
        {
            #region if-else
            //bool isRaining = false;
            //if (isRaining)
            //{
            //    Console.WriteLine("Take an umbrella!");
            //}

            //else
            //{
            //    Console.WriteLine("Don't take an umbrella!");
            //}
            #endregion



            #region do-While
            //int x = 10;
            //do
            //{
            //    Console.WriteLine(x);

            //    x--;
            //}
            //while (x > 5);
            #endregion

            #region ForLoop
            //int n = 10;

            //for (int i = 0; i < n; i++)
            //{
            //    Console.WriteLine(i);
            //}
            #endregion



             
            double d = 9.5;

            int num = Convert.ToInt32(d);
            Console.WriteLine(num);

            double d2 = num;
            Console.WriteLine(d2);



        }
    }
}
