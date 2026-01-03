using LoginApp.DAL;
using LoginApp.Models;

using System;
namespace LoginApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            UserDAL userDAL = new UserDAL();
                int choice;

                do
                {
                    Console.WriteLine("\n=== Menu ===");
                    Console.WriteLine("1. Login");
                    Console.WriteLine("2. Register");
                    Console.WriteLine("3. Forgot Password");
                    Console.WriteLine("4. Exit");
                    Console.Write("Enter your choice: ");
                    choice = int.Parse(Console.ReadLine());

                    switch (choice)
                    {
                        case 1: // Login
                            Console.Write("Enter Username: ");
                            string loginUser = Console.ReadLine();
                            Console.Write("Enter Password: ");
                            string loginPass = Console.ReadLine();

                            User login = new User { Username = loginUser, Password = loginPass };
                            if (userDAL.ValidateUser(login))
                                Console.WriteLine("Login Successful!");
                            else
                                Console.WriteLine("Invalid Username or Password.");
                            break;

                        case 2: 
                            Console.Write("Enter New Username: ");
                            string regUser = Console.ReadLine();
                            Console.Write("Enter New Password: ");
                            string regPass = Console.ReadLine();

                            User register = new User { Username = regUser, Password = regPass };
                            if (userDAL.RegisterUser(register))
                                Console.WriteLine("Registration Successful!");
                            else
                                Console.WriteLine("Registration Failed.");
                            break;

                        case 3: 
                            Console.Write("Enter Username: ");
                            string fpUser = Console.ReadLine();
                            Console.Write("Enter New Password: ");
                            string fpPass = Console.ReadLine();

                            User forgot = new User { Username = fpUser, Password = fpPass };
                            if (userDAL.UpdatePassword(forgot))
                                Console.WriteLine("Password Updated Successfully!");
                            else
                                Console.WriteLine("Password Update Failed.");
                            break;

                        case 4:
                            Console.WriteLine("Thank you for Visiting...");
                            break;

                        
                     



                        default:
                            Console.WriteLine("Invalid choice. Try again.");
                            break;
                    }

                } while (choice != 4);
            }
        }
    }


    

