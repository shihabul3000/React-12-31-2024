const express = require('express');
const cors = require ('cors');
const app = express();
const port = process.env.PORT || 5000;

// MiddleWare
app.use(cors());
app.use(express.json());

const users = [
    { "id": 1, "name": "Hassan", "email": "sabana1@yahoo.com" },
    { "id": 2, "name": "Hassan", "email": "nadia2@outlook.com" },
    { "id": 3, "name": "Nadia", "email": "sabana3@outlook.com" },
    { "id": 4, "name": "Lina", "email": "omar4@outlook.com" },
    { "id": 5, "name": "Ayesha", "email": "karim5@yahoo.com" },
    { "id": 6, "name": "Nadia", "email": "sabana6@yahoo.com" },
    { "id": 7, "name": "Hassan", "email": "sabana7@outlook.com" },
    { "id": 8, "name": "Farzana", "email": "omar8@gmail.com" },
    { "id": 9, "name": "Lina", "email": "rahim9@hotmail.com" },
    { "id": 10, "name": "Omar", "email": "jabir10@outlook.com" },
    
    
    
]

app.get('/' , (req,res)=> {
    res.send('Users Management server is running');
})





app.get('/users',(req , res) => {
    res.send(users);
} )

app.post('/users' , (req,res) =>{
    console.log('post api hitting')
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1 ;
    users.push(newUser);
    res.send (newUser);
})


app.listen(port , () =>{
    console.log(`Server is Running on PORT ${port}`);
})