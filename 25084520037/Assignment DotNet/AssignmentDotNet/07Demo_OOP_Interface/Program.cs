using System.Security.Cryptography.X509Certificates;

namespace _07Demo_OOP_Interface
{
    internal class Program
    {
        static void Main(string[] args)
        {
            #region Implicit implementation of interface IDrink
            //Drink drink = new Drink();
            //drink.GetDrink();
            #endregion

            Console.WriteLine("Enter your choice");
            int ch = Convert.ToInt32(Console.ReadLine());
            switch (ch)
            {

                case 1:
                    IDrink coldDrink = new ColdDrink();
                    coldDrink.GetDrink();
                    break;

                case 2:
                    IDrink hotDrink = new HotDrink();
                    hotDrink.GetDrink();
                    break;

                default:
                    Console.WriteLine("Invalid Choice");
                    break;




            }

        }

        public interface IDrink
        {
            void GetDrink();
        }

        public class ColdDrink : IDrink
        {
            public void GetDrink()
            {
                Console.WriteLine("Enjoy your ColdDrink");

            }
        }

        public class HotDrink : IDrink 
        {
            public void GetDrink()
            {
                Console.WriteLine("Enjoy your HotDrink");
            }
        }

    }
}