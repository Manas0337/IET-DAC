function add(...a){
    let sum = 0;

    for(let i =0; i <a.length;i++){

        sum = sum + a[i];
    }
console.log("Addition is", sum);

let oddNumber = [];

for(let i =0; i <a.length; i++){

    if(a[i] % 2 != 0){
        oddNumber.push(a[i]);
        
    }
}
console.log("Odd numbers:", oddNumber);
}


add(20,30,58,5);