function add(...arr){
    
    var sum = arr.reduce((acc, val) => (acc+val),)//no need of initializer at this movement
    console.log(sum);

   
}

add(4,7,3)



//odd no.
function odd(...arr){
    let arr1=arr.map((e)=>(e%2==1)?e:0 )
   for(let i=0;i<arr1.length;i++){
     if(arr1[i]!=0){
    console.log(arr1[i])
   }
 }
}
 odd(2,3,5,6,8)
