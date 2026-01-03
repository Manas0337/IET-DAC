using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace _33Demo_EmpLib
{
    [Table("Employee")]
    public class Emp
    {
        private int _Id;
        private string _Name;
        private string _Address;

        [Column("EId")]
        public int Id
        {
            get { return _Id; }
            set { _Id = value; }
        }

        [Column("EName")]
        public string Name
        {
            get { return _Name; }
            set { _Name = value; }
        }

        [Column("EAddress")]
        public string Address
        {
            get { return _Address; }
            set { _Address = value; }
        }
    }
}
