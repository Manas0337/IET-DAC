const express = require ('express')
const users1 = require('./MOCK_DATA.json')
const port = 4000
const app = express()

app.get('/users1' , (req,res) => {
    res.send('users1')
})


app.delete('/users1/:id', (req, res) => {
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
app.listen(port)
console.log("running the server")