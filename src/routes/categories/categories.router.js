import express from 'express';


//Functions
import { httpCreateCategory, httpGetAllCategories, httpGetCategory, httpUpdateCategory, httpDeleteCategory } from './categories.controller.js';
const router = express.Router();

//Create
router.post('/category', httpCreateCategory);

//Read
router.get('/', httpGetAllCategories );

router.get('/category/:id', httpGetCategory);

//Update
router.put('/category/:id', httpUpdateCategory);

//Delete 
router.delete('/category/:id', httpDeleteCategory);


export default router;