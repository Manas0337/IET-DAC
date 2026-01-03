
using _05_OOP_Inheritance.logic;
namespace _05_OOP_Inheritance
{
    internal class Program
    {
        static void Main(string[] args)
        {
            #region Demo1
            Person person = new Person();

            person.First_Name = "Meera";
            person.Last_NAme = "Kadu";



            //Console.WriteLine(person);

            
            //Console.WriteLine("Name : {0} {1}", person.First_Name, person.Last_NAme);
            #endregion


            Employee employee = new Employee();
            employee.emp_id = 1;

            Console.WriteLine("ID:{2} Name:{0} {1} ", person.First_Name, person.Last_NAme, employee.emp_id);


        }
    }
}
