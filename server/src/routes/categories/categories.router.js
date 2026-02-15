import express from 'express';


//Functions
import { httpCreateCategory, httpGetCategories, httpGetCategory, httpUpdateCategory, httpDeleteCategory } from './categories.controller.js';
const router = express.Router();

//Create
router.post('/category', httpCreateCategory);

//Read
router.get('/', httpGetCategories );

router.get('/category/:id', httpGetCategory);



//Update
router.put('/category/:id', httpUpdateCategory);

//Delete 
router.delete('/category/:id', httpDeleteCategory);


export default router;