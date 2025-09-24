function fact(n)
{
    if(n==0 || n==1)
    {
        return 1;
    }
    else
    {
        return n*fact(n-1)
    }
}
     rv=fact(6);
     console.log("factorial is ",rv);