using _31Demo_BVSAttribute;
using System.Reflection;
using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace _32Demo_MyApplication
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string asmPath = @"C:\Users\IET\Desktop\Assignment DotNet\AssignmentDotNet\33Demo_EmpLib\bin\Debug\net8.0\33Demo_EmpLib.dll";

            Assembly asm = Assembly.LoadFrom(asmPath);
            Type[] allTypes = asm.GetTypes();
            for (int i = 0; i < allTypes.Length; i++)
            {
                Type type = allTypes[i];
                //Console.WriteLine(type.Name);
                Attribute[] allAttributes = type.GetCustomAttributes().ToArray();
                for (int j = 0; j < allAttributes.Length; j++)
                {
                    Attribute attr = allAttributes[j];
                    if (attr is BonaventureSystemAttribute)
                    {
                        BonaventureSystemAttribute bvsAttr = attr as BonaventureSystemAttribute;

                        Console.WriteLine($"Class {type.Name} is developed by {bvsAttr.DeveloperName} of (c) {bvsAttr.CompanyName}");
                    }

                    if (attr is SerializableAttribute)
                    {
                        Console.WriteLine($"Class {type.Name} is marked as Serializable");
                    }
                }
            }

        }
    }
}
