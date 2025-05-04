const { fetchBook, addBook, deleteBook, updateBooks, singleBook } = require('../controller/book.controller')

const router=require('express').Router()

router.route('/books').get(fetchBook).post(addBook)
router.route('/books/:id').delete(deleteBook).patch(updateBooks).get(singleBook)

//Old methods

// router.get('/books',fetchBook)
// router.post('/books',addBook)
// router.delete('/books',deleteBook)
// router.patch('/books',updateBooks)



module.exports=router