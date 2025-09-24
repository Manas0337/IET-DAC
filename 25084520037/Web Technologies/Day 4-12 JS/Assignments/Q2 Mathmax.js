function calculate(...a)
{
    let sum=0;
    for(i=0;i<a.length;i++)
    {
        sum=sum+a[i];
    }
       console.log("Addition is:",sum);

       console.log("Maximum is:",Math.max(...a));
    
}
calculate(10,20,30);
calculate(1,5,7,8);
calculate(2,7,9,11);