namespace _31Demo_BVSAttribute
{
    [AttributeUsage(AttributeTargets.Class)]
    public class BonaventureSystemAttribute : Attribute
    {
        private string _CompanyName;
        private string _DeveloperName;

    public string DeveloperName
        {
            get { return DeveloperName; }
            set { DeveloperName = value; }
        }

        public string CompanyName
        {
            get { return CompanyName; }
            set { _CompanyName = value; }
        }
     }
  }
