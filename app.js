const express=require('express');

const bookRoute=require('./routes/bookRoute')

const app=express();
require('./database/connection')
app.use(express.json())

app.use('/',bookRoute)








app.listen(3000,()=>{
  console.log("server address http://localhost:3000");
})