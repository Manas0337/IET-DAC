using System.Reflection.Metadata.Ecma335;

namespace _11Demo_SealedClass
{

    internal class Program
    {
        static void Main(string[] args)
        {
            MyMath2 obj = new MyMath2();
            obj.SayHi(); 
            AdvanceMath a = new MyMath(); 
            Console.WriteLine(a.Square(10)); 
          
        }
    }
    public sealed class CMath
    {
        public int add(int x, int y)
        {
            return x + y;
        }
        public int subtract(int x, int y)

        {
            return x - y;
        }
    }
    public class AdvanceMath 
    {
        //public int WrapperAdd(int x, int y)
        //{
        //    CMath cMath = new CMath();
        //    return cMath.Add(x, y);
        //    return base.Add(x, y);
        //}

        public virtual int Square(int x)
        {
            return x * x;
        }
    }

    public class MyMath : AdvanceMath
    {
        public virtual void SayHi()
        {
            Console.WriteLine("Hi there");
        }
        public sealed override int Square(int x)
        {
            return x * x * 100;
        }
    }
    public class MyMath2 : MyMath
    {
        public override void SayHi()
        {
            Console.WriteLine("Hello Hey Sambata");
        }

        //public override int Square(int x)
        //{
        //    return x * x * 1000;
        //}
    }
}

