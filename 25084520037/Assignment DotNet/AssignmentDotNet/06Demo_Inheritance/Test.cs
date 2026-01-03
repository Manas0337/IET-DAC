using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06Demo_Inheritance
{
    internal class CMath
    {
        public int add(int a, int b) 
        {
            return a + b;
        }

        public void add(int a, int b, int c) 
        
        {
            Console.WriteLine("Addition is : {0} {1} {2}", (a + b + c));
        }
        public void sub(int a, int b) 
        {
            Console.WriteLine("Substraction  is : {0} {1} ", (a - b));
        }

        public virtual void mul(int a, int b) 
        {
            Console.WriteLine("Multiplication is : {0} {1} ", (a * b));
        }
    }

    internal class AdvanceMath : CMath 
    
       {
        public override void mul(int a, int b)
        {
            Console.WriteLine("Adv Math Mul : {0} {1}",(a * b)*100);
        }
         
        public new void sub(int a, int b)
        {
            Console.WriteLine("Adv Sub is : {0} {1}", (a - b)*2);
        }

        public void add(int a,int b)
        {
            Console.WriteLine("Adv Add is : {0} {1}", (a + b)*100);
        }

        public int add(int a, int b, int c, int d)
        {
            return a + b + c + d;
        }
    }
}
