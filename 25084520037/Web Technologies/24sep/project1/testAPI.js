const express = require('express')
const user1 = require('./MOCK_DATA.json')

const fs = require('fs');

const port = 8000; 
const app = express()
app.use(express.json()); 

app.get( '/user1' , (req, res)=>{
   res.send(user1)
})

app.get( '/user1/:id' , (req, res)=>{
    const id = Number(req.params.id)
    const user = user1.find(user=>user.id===id)

    return res.json(user)
}
)
app.get( '/user1/:id/:email' , (req, res)=>{
    const id = Number(req.params.id)
    const user = user1.find(user=>user.id===id)

    return res.json(user)
}
)

app.post('/user1', (req, res) => {
  const { id, firstName, lastName, email } = req.body;
   if (!id || !firstName || !lastName || !email) {
    return res.status(400).send('Missing required fields');
  }
  const newUser = { id, firstName, lastName, email };
  user1.push(newUser);

 fs.writeFile('./MOCK_DATA.json', JSON.stringify(user1, null, 2), err => {
    if (err) {
      return res.status(500).send('Error saving user');
    }
    res.status(201).json({ message: 'User added successfully', user: newUser });
  });
});

app.delete('/user1/:id', (req, res) => {
    const id = Number(req.params.id);  
 
    const userIndex = user1.findIndex(
        user => user.id === id
    )
    if (userIndex === -1)
        return res.status(404).send('Data not found');

    const deletedItem = user1.splice(userIndex, 1);
    return res.json("Yes the deleted ");

});
app.listen(port)
console.log("runnig server on 3000")