const { books } = require("../database/connection")

exports.fetchBook=async function(req,res)  {

  //logic
  try {
    const data =await books.findAll()
  res.json({
    message:'books fetched sucessfully',
    data:data
  
  })
    
  } catch (error) {

    console.log('Something is wrong ')
    
  }

  
}

exports.addBook=async function(req,res){
  //logic

  try {
    const {bookName,bookPrice,bookAuthor}=req.body
  console.log();
  await books.create({
   bookName:bookName,
   bookPrice:bookPrice,
   bookAuthor:bookAuthor
  })
 res.json({
   message:'books added sucessfully'
 })
    
  } catch (error) {

    console.log('Something is wrong ')
    
  }
  
}

exports.deleteBook=async function(req,res){
  // logic
  try {
    const id=req.params.id

  await books.destroy({
    where:{
      id
    }
  })




  res.json({
    message:'books deleted sucessfully'
  })
    
  } catch (error) {
    console.log('Something is wrong ')
    
  }

  
}

exports.updateBooks=async function(req,res){
  // logic
  try {
    const id=req.params.id
  const {bookName,bookPrice,bookAuthor}=req.body
  await books.update({
    bookName,
    bookPrice,
    bookAuthor
  },{
    where:{
      id
    }
  })

  res.json({
    message:'books update sucessfully'
  })
    
  } catch (error) {

    console.log('Something is wrong ')
    
  }

  
}

exports.singleBook= async function(req,res){

  try {
    const id=req.params.id
  const data= await books.findByPk(id)//Always return objects

  //Another method for finding books by it

  // const datas= await books.findAll({
  //   where :{
  //     id:id
  //   }
  // })

  res.json({
    message:'Single book fetched Successfully',
    data,
    // datas
  })
    
  } catch (error) {
    console.log('Something is wrong ');
    
  }

  


}