const express = require('express');
const {createUser,login} = require('../controller/userCont');
const {createbook,createbook,getBook,getBookById,updateBook,deleteBook} = require('../controller/bookCont');
const {reviews,updateReviews,deleteReview} = require('../controller/reviewCont');
const {auth,Authorisation,updateAuthorisation, hashpass} = require('../middleware/auth');
const router = express.Router();

router.post('/register',hashpass, createUser);
router.post('/login',login)
router.post('/books',auth,Authorisation,createbook);
router.get('/books',auth, getBook);
router.get('/books/:bookId',auth,getBookById);
router.put('/books/:bookId',auth,updateAuthorisation,updateBook);
router.delete('/books/:bookId',auth,updateAuthorisation,deleteBook);
router.post('/books/:bookId/review',reviews);
router.put('/books/:bookId/review',updateReviews);
router.delete('/books/:bookId/review',deleteReview);




module.exports = router;