using Microsoft.Data.SqlClient;

namespace _42Demo_ConnectedAdoNet
{
    internal class Program
    {
        static void Main(string[] args)
        {
            String ConnectionString  = "Data Source=(LocalDB)\\MSSQLLocalDB;Initial Catalog=IETDb;Integrated Security=True";

              SqlConnection con = new SqlConnection(ConnectionString);

            //  string selectQuery = "SELECT * FROM EMP";


            //  SqlCommand cmd = new SqlCommand();
            //  cmd.CommandType = System.Data.CommandType.Text;
            //  cmd.CommandText = selectQuery;
            //  cmd.Connection = con;

            //  con.Open();

            //  SqlDataReader reader = cmd.ExecuteReader();
            //  while (reader.Read())
            //  {
            //      int id = Convert.ToInt32(reader["Id"]);
            //      string? nm = reader["Name"].ToString();
            //      string? address = reader["Address"].ToString();
            //      Console.WriteLine($"Id:{id}, Name: {nm}, Address: {address}");
            //  }

            //  con.Close();

          
            Console.WriteLine("Enter Name:");
            string nm = Console.ReadLine();
            Console.WriteLine("Enter Address");
            string add = Console.ReadLine();

            string insertQuery = $"INSERT INTO Emp(NAME,ADDRESS) VALUES('{nm}','{add}')";

            SqlCommand cmd = new SqlCommand(insertQuery, con);
            cmd.CommandType = System.Data.CommandType.Text;
            cmd.CommandText = insertQuery;
            cmd.Connection = con;

            con.Open();

            int noOfRowsAffected = cmd.ExecuteNonQuery();
            if (noOfRowsAffected > 0)
            {
                Console.WriteLine("Record inserted successfully!!");
            }
            else
            {
                Console.WriteLine("Error");
            }

            con.Close();
        }
    }
}
