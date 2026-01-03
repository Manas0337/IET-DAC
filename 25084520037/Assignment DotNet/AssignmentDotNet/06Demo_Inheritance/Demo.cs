using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06Demo_Inheritance.d
{
    internal class BaseClass
    {
        private int Base_Number;
        public BaseClass()
        {

        }
        public BaseClass(int num)
        {
            Base_Number = num;
            Console.WriteLine("you passed number {0}", Base_Number);
        }

        public void method1()
        {
            Console.WriteLine("Method1 from base class");

        }
    }


    internal class DerivedClass : BaseClass
    {

        public DerivedClass() : base()
        {

        }

        public DerivedClass(int no) : base(no)
        {

        }

        public void method2()
        {

            Console.WriteLine("Method2 From The Derived Class");


        }



    }
}