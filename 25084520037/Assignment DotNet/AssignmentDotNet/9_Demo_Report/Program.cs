using System.Collections;
using System.Text.Json.Nodes;

namespace _9_Demo_Report
{
    internal class Program
    {
        static void Main(string[] args)
        {
            while (true)
            {
                Console.WriteLine("Enter your Choice: 1. PDF, 2. XML, 3. Excel, 4. JSON, 5.DOCX");
                int choice = Convert.ToInt32(Console.ReadLine());
                ReportFactory factory = new ReportFactory();
                Report report = factory.GetSomeReport(choice);
                report.GenerateReport();

                Console.WriteLine("Do you want to continue y/n? ");
                String ynchoice = Console.ReadLine();

                if (ynchoice == "n")
                {
                    break;
                }
               
            }
        }
    }
}
public abstract class Report
{
    protected abstract void Parse();
    protected abstract void Validate();

    protected abstract void Save();
    public virtual void GenerateReport()
    {
     Parse();
    Validate();
    Save();
    Console.WriteLine("Special Report Generated.");

    }
}
public abstract class SpecialReport : Report
{
   
    protected abstract void ReValidate();
    public override void GenerateReport()
    {
        Parse();
        Validate();
        ReValidate();
        Save();
        Console.WriteLine("Special Report Generated");
    }
    
}
public class ReportFactory
{
    public Report GetSomeReport(int choice)
    {
        Report someReport = null;
        switch (choice)

        {
            case 1:
                someReport = new PDF();
                break;

            case 2:
                someReport = new XML();
                break;

            case 3:
                someReport = new Excel();
                break;

            case 4:
                someReport = new JSON();
                break;

            case 5:
                someReport = new DOCX();
                break;
            default:
                someReport = null;
                break;
            }
            return someReport;

        }
    }
public class PDF : SpecialReport
{
    protected override void Parse()
    {
        Console.WriteLine("PDF Parse");
    }
    protected override void Validate()
    {
        Console.WriteLine("PDF Validate");
    }



    protected override void Save()
    {
        Console.WriteLine("PDF Save");
    }
    protected override void ReValidate()
    {
        Console.WriteLine("PDF ReValidate");
    }


   }
   public class XML : SpecialReport
     {
       protected override void Parse()
      {
        Console.WriteLine("XML Parse");
       }

    protected override void Validate()
    {
        Console.WriteLine("Xml Validate");
    }

    

    protected override void Save()
    {
        Console.WriteLine("Xml save");
    }
    protected override void ReValidate()
    {
        Console.WriteLine("Xml Validate");
    }


     
}

public class Excel : SpecialReport
{
    protected override void Parse() {

        Console.WriteLine("Excel Parse");
    
    
    }
    protected override void Validate()
    {

        Console.WriteLine("Excel Validate");


    }
    protected override void Save()
    {

        Console.WriteLine("Excel Save");


    }
    protected override void ReValidate()
    {

        Console.WriteLine("Excel ReValidate");


    }


}
public class DOCX : Report
{
    protected override void Parse()
    {
        Console.WriteLine("DOCX parsed.");
    }
    protected override void Validate()
    {
       
        Console.WriteLine("DOCX validated.");
    }
    protected override void Save()
    {
       
        Console.WriteLine("DOCX Saved.");
    }

}



public class JSON : SpecialReport
{
    protected override void Parse()
    {
        
        Console.WriteLine("JSON parsed.");
    }
    protected override void Validate()
    {
       
        Console.WriteLine("JSON validated.");
    }
    protected override void Save()
    {
        
        Console.WriteLine("JSON Saved.");
    }
    protected override void ReValidate()
    {
       
        Console.WriteLine("JSON Re-Validated.");
    }

}

