

class PrimeNumber
{
    static bool IsPrime(int number)
    {
        if (number <= 1) return false;
        for (int i = 2; i < number; i++)
        {
            if (number % i == 0) return false;
        }
        return true;
    }

    static void Main()
    {
        Console.WriteLine("Prime numbers between 1 and 50:");
        for (int i = 1; i <= 50; i++)
        {
            if (IsPrime(i))
                Console.Write(i + " ");
        }
    }
}
