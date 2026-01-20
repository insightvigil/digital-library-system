//CRUD

//Create Category
export const httpCreateCategory = (request, response) => {
    response.send('Aquí puedes crear un nuevo libro');
}

//Read Categories
export const httpGetCategories = (request,response)=> {
    response.send('Aquí puedes consultar todas las categorias');
}

//Read Category
export const httpGetCategory = (request,response)=> {
        response.send('Aquí puedes consultar 1 categoria');
}

//Update Category
export const httpUpdateCategory = (request,response)=> {
    response.send('Aquí puedes actualizar los datos de una categoria');
}

//Delete Category
export const httpDeleteCategory = (request,response)=> {
    response.send('Aquí puedes eliminar una categoría');
}