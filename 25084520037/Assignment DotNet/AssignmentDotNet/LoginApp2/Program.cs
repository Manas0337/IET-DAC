using LoginApp2.DAL;
using LoginApp2.Model;
namespace LoginApp2
{
    internal class Program
    {
        static void Main(string[] args)
        {

                UserDAL dal = new UserDAL();
                int choice;

                do
                {
                    Console.WriteLine("\n=== User Management Menu ===");
                    Console.WriteLine("1. Register");
                    Console.WriteLine("2. Login");
                    Console.WriteLine("3. Forgot Password");
                    Console.WriteLine("4. Exit");
                    Console.Write("Enter choice: ");
                    choice = int.Parse(Console.ReadLine());

                    switch (choice)
                    {
                        case 1:
                            Console.Write("Enter Username: ");
                            string regUser = Console.ReadLine();
                            Console.Write("Enter Password: ");
                            string regPass = Console.ReadLine();
                            Console.Write("Enter Email: ");
                            string regEmail = Console.ReadLine();

                            User newUser = new User { Username = regUser, Password = regPass, Email = regEmail };
                            if (dal.Register(newUser))
                                Console.WriteLine("✅ Registration successful!");
                            else
                                Console.WriteLine("❌ Registration failed.");
                            break;

                        case 2:
                            Console.Write("Enter Username: ");
                            string loginUser = Console.ReadLine();
                            Console.Write("Enter Password: ");
                            string loginPass = Console.ReadLine();

                            if (dal.Login(loginUser, loginPass))
                                Console.WriteLine("✅ Login successful!");
                            else
                                Console.WriteLine("❌ Invalid credentials.");
                            break;

                        case 3:
                            Console.Write("Enter Username: ");
                            string forgotUser = Console.ReadLine();
                            Console.Write("Enter New Password: ");
                            string newPass = Console.ReadLine();

                            if (dal.ForgotPassword(forgotUser, newPass))
                                Console.WriteLine("✅ Password updated successfully!");
                            else
                                Console.WriteLine("❌ User not found.");
                            break;

                        case 4:
                            Console.WriteLine("Exiting...");
                            break;

                        default:
                            Console.WriteLine("Invalid choice.");
                            break;
                    }
                } while (choice != 4);
            }
        }
    }



