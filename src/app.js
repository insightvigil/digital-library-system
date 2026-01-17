//Libraries
import express from 'express';
import cors from 'cors';

//Routers
import booksRouter from './routes/books/books.routes.js';



const app = express();
app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json());

app.use('/books', booksRouter);


export default app;