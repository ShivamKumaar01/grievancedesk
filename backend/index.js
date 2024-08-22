const express=require('express');
const app=express();

require('dotenv').config();
const port=process.env.PORT || 3000;

app.use(express.json());

app.listen(port, () => {
    console.log(`Server started successfully at ${port}`);
})

const dbconnect = require("./config/database");
dbconnect();

app.get('/',(req,res)=>{
    res.send("This is your Home page baby")
})