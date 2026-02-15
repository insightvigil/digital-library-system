import express from 'express';
import { httpCreateBook, httpGetBooks, httpGetBook, httpUpdateBook, httpDeleteBook, httpGetBooksGrid, httpGetBooksByCategory } from './books.controller.js';

const router = express.Router();

//Create Book
router.post('/', httpCreateBook);

//Read Books
router.get('/', httpGetBooks);

//Read Book
router.get('/:id',httpGetBook);

//Get Books By Grid
router.get('/grid/:id', httpGetBooksGrid)

//Get Books By Category
router.get('/categories/:id', httpGetBooksByCategory);

//Update Book
router.put('/:id', httpUpdateBook);

//Delete Book
router.delete('/:id',httpDeleteBook);



export default router