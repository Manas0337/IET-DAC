//let a = "Hello World";
console.log("basics ");
let b = [1,2,3,4,];
console.log("hii");
console.log(b);


//addition
console.log("addition using function")
function add(a,b)
{
console.log("addition is " + (a +b));
}
add(2,3);

//lamda
console.log("addition using lamda");
let a =(c,b)=> c+b;
let v = a(3,4);
console.log(v);

//array
console.log("string array");
let fruits =["apple","banana","cherry"];
console.log(fruits[1]);

//function
console.log("multiplication using function");
function mul(a,b)
{
    return  a*b;  
}
console.log(mul(2,3))


//Array
// let r=[10,20,30];
// console.log(r[1]);

console.log("square of array");
let arr = [12,3,5,6];
let sqr =arr.map((r)=>console.log(r*r));

console.log("Uppercase");
let arr2 = ["Manas","Pawar"];
console.log(arr2.map((r)=>r.substring(0,5).toUpperCase()));

console.log("Lowercase");
onsole.log(arr2.map((r) =>r.substring(0,2).toLowerCase()));