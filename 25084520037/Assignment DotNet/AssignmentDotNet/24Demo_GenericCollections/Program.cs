namespace _24Demo_GenericCollections
{
    internal class Program
    {
        static void Main(string[] args)
        {
          Emp emp1 = new Emp();
            emp1.eid = 10;
            emp1.ename = "manya";
            emp1.address = "satara";

            Emp emp2 = new Emp();
            emp2.eid = 11;
            emp2.ename = "meera";
            emp2.address = "Amt";

            Emp emp3 = new Emp();
            emp3.eid = 12;
            emp3.ename = "radha";
            emp3.address = "ngp";

            //List<Emp> list = new List<Emp>();
            //list.Add(emp1);
            //list.Add(emp2);
            //list.Add(emp3);

            //foreach (Emp emp in list)
            //{
            //   Console.WriteLine($"Id : {emp.eid},Name : {emp.ename},Adress : {emp.address}"); 
            //}

            Dictionary<int,Emp> map = new Dictionary<int,Emp>();
            map.Add(1, emp1);
            map.Add(2, emp2);
            map.Add(3, emp3);

            foreach(KeyValuePair<int,Emp> element in map)
            {
                Emp emp = element.Value;
                 // element.Key
                   Console.WriteLine($"Id: {emp.eid}, Name: {emp.ename}, Address : {emp.address}");
            }
        }

    }

  public class Emp
    {
        private int _eid;
        private string _name;
        private string _addr;

        

        public int eid
        {
            get { return _eid; }
            set { _eid = value; }
        }

        public string ename
        {
            get { return _name; }
            set { _name = value; }
        }
        public string address
        {
            get { return _addr; }
            set { _addr = value; }
        }

    }

    }
