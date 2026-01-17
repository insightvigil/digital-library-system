import express from 'express';
import { httpCreateBook, httpGetBooks, httpUpdateBook, httpDeleteBook } from './books.controller.js';

const router = express.Router();

router.get('/book/:id', httpCreateBook);
router.get('/', httpGetBooks);
router.get('/',httpUpdateBook);
router.get('/book/',httpDeleteBook);

export default router