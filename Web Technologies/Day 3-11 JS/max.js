let arr1 =[10,80,30,40];

let max = arr1[0];
for(let i=1;i<4;i++)
{
    if(max < arr1[i]){
        max = arr1[i];
    }

}
 console.log("Max Number is" ,max);



// arr1.sort((a,b) => b-a);
// let max = arr1[0];
// console.log(max);