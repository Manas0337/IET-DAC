function factorial(n)
{
    if(n===0 || n===1)
    {
        return 1;
    }
    else
    {
        return n * factorial(n - 1);
    } 
}

const args = process.argv;

const num = Number(args[2]);

const result = factorial(num);

console.log(`factorial of ${num} = ${result}`);
