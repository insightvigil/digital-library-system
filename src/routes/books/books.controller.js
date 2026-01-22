//Models
import { getBooks,getBook } from "../../models/books.model.js";
//CRUD

//Create
export const httpCreateBook = (request,response)=> {
    response.status(200).send("Hello There!, You can create books here");
}

//Read
export const httpGetBooks = async (request,response) => { 
    response.status(200).send(await getBooks());
}

export const httpGetBook = async (request,response)=> {
    const {id} = request.params;
    //Transform the string into number
    const bookid = Number(id);
    response.status(200).send(await getBook(bookid));
}

//Update
export const httpUpdateBook = (request,response) => {
    response.send("Hello there! You can update books here");
}

//Delete
export const httpDeleteBook = (reques,response)=> {
    response.send("Hello There!, You can delete books here");
}
