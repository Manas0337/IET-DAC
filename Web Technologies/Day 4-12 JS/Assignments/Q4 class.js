let data=
{
    FirstName:"Manas",
    LastName:"Pawar",
    Age:"23",
    Department:"ENTC",

    function()
    {
        return "First Name:" + this.FirstName +"\n"+
        "Last Name:" + this.LastName +"\n"+
        "Age:" +this.Age +"\n"+
        "Department:" +this.Department ;
    }
};
console.log(data.function());