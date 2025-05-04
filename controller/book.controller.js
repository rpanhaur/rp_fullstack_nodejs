const { books } = require("../database/connection")

exports.fetchBook=async function(req,res)  {

  //logic

  const data =await books.findAll()
  res.json({
    message:'books fetched sucessfully',
    data:data
  
  })
}

exports.addBook=async function(req,res){
  //logic
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
}

exports.deleteBook=async function(req,res){
  // logic

  const id=req.params.id

  await books.destroy({
    where:{
      id
    }
  })




  res.json({
    message:'books deleted sucessfully'
  })
}

exports.updateBooks=async function(req,res){
  // logic

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
}

exports.singleBook= async function(req,res){

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


}