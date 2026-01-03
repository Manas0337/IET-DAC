using _06Demo_Inheritance.d;
namespace _06Demo_Inheritance
{
    internal class Program
    {
        static void Main(string[] args)
        {

            //BaseClass baseobj = new BaseClass();
            //baseobj.method1();
            //DerivedClass derivedobj = new DerivedClass();
            //derivedobj.method1();
            //derivedobj.method2();
            //BaseClass obj = new DerivedClass();
            //obj.method1();

            #region Method Overloadding
            //AdvanceMath advanceMath = new AdvanceMath();
            //Console.WriteLine(advanceMath.add(1, 2, 3, 4));
            //Console.WriteLine(advanceMath.sub(16, 2));
            #endregion

            AdvanceMath advanceMath = new AdvanceMath();
            advanceMath.sub(10, 5);
            advanceMath.add(10, 5);
            advanceMath.mul(10, 5);


        }
    }
}
