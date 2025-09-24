const express = require('express'); 
const fs = require('fs');
const users1 = require('./MOCK_DATA.json');
const port = 3000;
const app = express();


app.use(express.json()); 

app.get('/', (req, res) => {
    res.send("Hello You are check Express");
});

app.get('/users', (req, res) => {
    res.json(users1);
});

app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users1.find(user => user.id === id);
    return res.json(user);
});



app.delete('/users/:id', (req, res) => {
    const id = Number(req.params.id);  // 15
    // console.log(id);
    
    const userIndex = users1.findIndex(
        user => user.id === id
    )
    if (userIndex === -1)
        return res.status(404).send('Data not found');

    const deletedItem = users1.splice(userIndex, 1);
    return res.json("Dae ");
});


app.post('/users', (req, res) => {
    const {firstName, lastName, email} = req.body;
    const newId = users1.length ? users1[users1.length-1].id + 1 : 1;
    const newUser = {id: newId, firstName, lastName, email};
    users1.push(newUser);
    fs.writeFileSync('./MOCK_DATA.json', JSON.stringify(users1, null, 2));
    res.json(newUser);
});

console.log(" Start Script");
app.listen(port, () =>
    console.log('Server running at http://localhost:3000/')
);

