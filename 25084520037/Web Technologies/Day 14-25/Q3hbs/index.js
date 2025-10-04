const express = require('express');
const app = express();
const path = require('path');

app.set('view engine','hbs');
app.set('views',path.join(__dirname));

//usefull to check validation and sending data to next script (Runs First)
app.use((req,res,next)=>{
    console.log("Middle ware started");
//    res.set('content-type','text/html');
    req.data = "from middleware";
    next();
    
})

// this is using hbs render will be used
// app.get('/aboutus',(req,res)=>{
//     // let config1 = req.query.name;
//     // let config2 = req.query.email;

// let [Name, mail] = [req.query.name, req.query.email];
// console.log("Name:", Name);
// console.log("Mail:", mail);

 
//     res.render('demo',{name : Name , email: mail});
// })


//His is normal way to access file
app.get('/aboutus',(req,res)=>{
    let config = path.join(__dirname,'aboutus.html');
    console.log(config);
    console.log(req.data);
    
    res.sendFile(config);
    res.sendfile("aboutus");
})
app.listen(7070,()=>{
    console.log("Server Started");
})