const express = require('express');
const phone = require('./phone.json')
const app = express();
const port = 5000;

app.get('/', (req, res)=>{
     res.send('Iphone server running yah look mama i can do it')
});

app.get('/phone', (req, res) => {
     res.send(phone)
})

app.get('/phone/:id', (req, res) =>{
     const id = parseInt(req.params.id);
     const phones = phone.find(ph => ph.id === id) || {};
     res.send(phones)

})


app.listen(port, ()=>{
     console.log(`Iphone server is running on port: ${port}`)
})

