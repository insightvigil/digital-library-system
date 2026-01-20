import express from 'express';
import { httpCreateBook, httpGetBooks, httpGetBook, httpUpdateBook, httpDeleteBook } from './books.controller.js';

const router = express.Router();

//Create Book
router.post('/book', httpCreateBook);

//Read Books
router.get('/', httpGetBooks);
//Read Book
router.get('/book/:id',httpGetBook);

//Update Book
router.put('/book/:id', httpUpdateBook);

//Delete Book
router.delete('/book/:id',httpDeleteBook);

export default router