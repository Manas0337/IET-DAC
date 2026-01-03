using System.Data.SqlTypes;
using static _08_OOP_Interface.SqlServer;

namespace _08_OOP_Interface
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter your Db choice. 1.SqlServer,2.MySql Server 3.Oracle Server");
            int dbChoice = Convert.ToInt32(Console.ReadLine());

            DataBaseFactory factory = new DataBaseFactory();
            IDatabase someDatabaseObject = factory.GetSomeDatabase(dbChoice);
            Console.WriteLine("Enter db operation choice: 1.Insert, 2.Update 3.Delete");
            int opChoice = Convert.ToInt32(Console.ReadLine());

            switch (opChoice)
            {
                case 1:
                    someDatabaseObject.insert();
                    break;
                case 2:
                    someDatabaseObject.update();
                    break;
                case 3:
                    someDatabaseObject.delete();
                    break;
                default:
                    Console.WriteLine("Invalid Db operation Choice");
                    break;

            }
        }
    }
    public interface IDatabase
    {
        void insert();
        void update();
        void delete();
    }
    public class DataBaseFactory
    {

        public IDatabase GetSomeDatabase(int dbChoice)
        {
            IDatabase db = null;
            switch (dbChoice)
            {
                case 1:
                    db = new SqlServer();
                    break;
                case 2:
                    db = new MySqlServer();
                    break;
                case 3:
                    db = new OracleServer();
                    break;
                default:
                    db = null;
                    break;
            }
            return db;
        }
    }
    public class SqlServer : IDatabase
    {
        public void insert()
        {
            Console.WriteLine("Recored inserted in sql server successfully");
        }
        public void update()
        {
            Console.WriteLine("Record update in sql server succesfully");

        }

        public void delete()
        {
            Console.WriteLine("Record deleted in sql server succedsfully");
        }

        public class MySqlServer :IDatabase
        {
            public void insert()
            {
                Console.WriteLine("Recored inserted in mysql server successfully");
            }


            public void update()
            {
                Console.WriteLine("Recored updated in mysql server successfully");
            }

            public void delete()
            {
                Console.WriteLine("Recored deleted in mysql server successfully");
            }


        }

        public class OracleServer : IDatabase
        {
            public void insert()
            {
                Console.WriteLine("Recored inserted in  Oracleserver successfully");
            }
            public void update()
            {
                Console.WriteLine("Recored updated in  Oracleserver successfully");
            }
            public void delete()
            {
                Console.WriteLine("Recored deleted in  Oracleserver successfully");
            }
        }




    }
}