function calculate(...a)
{
let num=0;
for(let i=0;i<a.length;i++)
{
    num=num+a[i];
}
console.log("Addition is",num);

for(let i=0;i<a.length;i++)
{
    if (a[i] %2 !=0)
    {
        console.log("Odd Numer is",a[i]);
    }    
}
}
calculate(1,4);
calculate(2,4,6);
calculate(2,3,4);
calculate(5,7,9);