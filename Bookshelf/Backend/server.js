 


 const express = require('express')

 const app = express()

 app.get('/',(req,res) => {
   
    res.send("this is my home page")

 })

 
 const PORT = 7171;


 app.listen(PORT, () => {
    console.log(`server is start port ${PORT}`);
 })