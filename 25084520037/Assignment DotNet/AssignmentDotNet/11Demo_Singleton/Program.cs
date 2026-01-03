using System.ComponentModel.DataAnnotations.Schema;
using System.Data.SqlTypes;

namespace _11Demo_Singleton
{
    internal class Program
    {
        static void Main(string[] args)
        {
            while (true)
            {
                Console.WriteLine("Enter the DataBase Choices 1. SqlServer, 2. MySqlServer, 3. OracleServer");
                int dbChoice = Convert.ToInt32(Console.ReadLine());

                DataBasefactory factory = new DataBasefactory();

                Database SomeDataBaseobject = factory.GetSomeDatabase(dbChoice);

                Console.WriteLine("Enter DB Operation 1. Insert , 2. Upadate 3. Delete");
                int opChoice = Convert.ToInt32(Console.ReadLine());
                switch (opChoice)
                {
                    case 1:
                        SomeDataBaseobject.Insert();
                        break;

                    case 2:
                        SomeDataBaseobject.Update();
                        break;
                    case 3:
                        SomeDataBaseobject.Delete();
                        break;
                    default:
                        Console.WriteLine("Invalid DB Operation Choice");
                        break;

                }

                Console.WriteLine("Do you want to continue y/n?");
                String ynChoice = Console.ReadLine();

                if (ynChoice == "n")
                {
                    break;
                }

            }
        }
    }
    public abstract class Database
    {
        public Logger _logger = null;
        public Database()
        {
            _logger = Logger.GetLogger();

        }
        protected abstract void DoInsert();
        protected abstract void DoUpdate();
        protected abstract void DoDelete();
        protected abstract string GetDataBaseName();

        public void Insert()
        {
            _logger.Log($"insert from{GetDataBaseName()} done.");
        }

        public void Update()
        {
            _logger.Log($"update from {GetDataBaseName()} done.");
        }

        public void Delete()
        {


            _logger.Log($"Delete from {GetDataBaseName()} done");
        }


    }

    public class DataBasefactory
    {
        public Database GetSomeDatabase(int dbChoice)
        {
            Database db = null;
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

    public class MySqlServer : Database
    {
        protected override string GetDataBaseName()
        {
            return "MySqlServer";

        }
        protected override void DoInsert()
        {
            Console.WriteLine("Record Inserted In MySql Succesfully");
        }
        protected override void DoUpdate()
        {
            Console.WriteLine("Record Updated in MySql Succesfully");
        }
        protected override void DoDelete()
        {
            Console.WriteLine("Record Deleted in MySql Succesfully");
        }
    }
    public class SqlServer : Database
    {
        protected override string GetDataBaseName()
        {
            return "SqlServer";

        }
        protected override void DoInsert()
        {
            Console.WriteLine("Record Inserted In SqlServer Succesfully");
        }
        protected override void DoUpdate()
        {
            Console.WriteLine("Record Updated in SqlServer Succesfully");
        }
        protected override void DoDelete()
        {
            Console.WriteLine("Record Deleted in SqlServer Succesfully");
        }
    }
    public class OracleServer : Database
    {
        protected override string GetDataBaseName()
        {
            return "OracleServer";

        }
        protected override void DoInsert()
        {
            Console.WriteLine("Record Inserted In OracleServer Succesfully");
        }
        protected override void DoUpdate()
        {
            Console.WriteLine("Record Updated in OracleServer Succesfully");
        }
        protected override void DoDelete()
        {
            Console.WriteLine("Record Deleted in OracleServer Succesfully");
        }



    }


    public class Logger
    {
        private static readonly Logger _logger1 = new Logger();

        private Logger()
        {
            Console.WriteLine("Logger Object is Creataed for this First Time");
        }
        public static Logger GetLogger()
        {
            return _logger1;
        }

        public void Log(string message)
        {
            Console.WriteLine("---Logged at {0}, message : {1}", DateTime.Now.ToString(), message);
        }
    }
}
