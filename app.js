const express=require('express');
const app=express();
require('./database/connection')

app.get('/books',(req,res)=>{

  //logic
  res.json({
    message:'books fetched sucessfully'
  })
})
app.post('/books',(req,res)=>{
   //logic
  res.json({
    message:'books added sucessfully'
  })
})
app.delete('/books/:id',(req,res)=>{
  // logic
  res.json({
    message:'books deleted sucessfully'
  })
})
app.patch('/books/:id',(req,res)=>{
  // logic
  res.json({
    message:'books update sucessfully'
  })
})


// postgresql://postgres:[YOUR-PASSWORD]@db.lqiztytnqbceyzocvgcx.supabase.co:5432/postgres




app.listen(3000,()=>{
  console.log("server address http://localhost:3000");
})