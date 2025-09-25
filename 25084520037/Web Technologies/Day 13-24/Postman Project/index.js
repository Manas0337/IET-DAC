const exp = require('express')
const app = exp();
const data = require('./MOCK_DATA.json')
app.use(exp.text());
app.use(exp.json());
app.use(exp.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send("by using GET")
})

app.get('/admin',(req,res)=>{
    res.send(data);
})

app.get('/:id',(req,res)=>{
    let id = Number(req.params.id);
    const d = data.find((itr)=>{
        return  itr = itr.id = id;
    })
    res.send(d);
})

app.post('/',(req,res)=>{
    let data = req.body;
    console.log(data);
    
    console.log("Hello "+data.id+" "+data.name);
    // const d = data.find((itr)=>{
    //     return  itr = itr.id === id;
    // })
    //res.send(id);
})

app.delete('/:id',(req,res)=>{
    let id = Number(req.params.id);
    const d = data.find((found)=>{
        return found = found.id = id;
    })
    if(d==-1){
        res.status(404).send("Data not found");
    }else{
    data.splice(d,1);
    res.send("Sucessfully deleted")
    }
})
// app.post('/',(req,res)=>{
//     let {id,name} = req.query;
//     res.send(`id = ${id} , name = ${name}`);
// })
app.listen(6969,()=>{
    console.log("Server started");
    
})
