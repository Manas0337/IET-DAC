const ext= require('express');
const app=ext();

app.get('/',(req,res)=>{
    res.send("hello")
})
app.listen(8000,()=>{
    console.log("service started");
    
});