//CRUD

//Create
export const httpCreateBook = (request,response)=> {
    response.send("Hello There!, You can create books here");
}

//Read
export const httpGetBooks = (request,response)=> { 
    response.send("Hello this is the page for Books.");
}

//Update
export const httpUpdateBook = (request,response) => {
    response.send("Hello there! You can update books here");
}

//Delete
export const httpDeleteBook = (reques,response)=> {
    response.send("Hello There!, You can delete books here");
}
