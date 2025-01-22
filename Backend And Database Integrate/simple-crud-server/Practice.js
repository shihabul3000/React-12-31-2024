const express = require('express');

const cors = require();
const app =express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('' , (req , res) =>{

    res.send('Simple Crud is Running !! ');
});

app.listen(port , () =>{
    console.log(`Yo MAMA Simple Crud is Running ${port}`);
})














