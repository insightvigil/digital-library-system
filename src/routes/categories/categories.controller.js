//Models
import { getCategories,getCategory } from "../../models/categories.model.js";

//CRUD

//Create Category
export const httpCreateCategory = (request, response) => {
    response.send('Aquí puedes crear un nuevo libro');
}

//Read Categories
export const httpGetCategories = async (request,response)=> {
    response.send(await getCategories());
}

//Read Category
export const httpGetCategory = async (request,response)=> {
    //Extract the parameter id from the URL
    const {id} = request.params;
    const categoryId = Number(id);

    response.status(200).send(await getCategory(categoryId));
}

//Update Category
export const httpUpdateCategory = (request,response)=> {
    response.send('Aquí puedes actualizar los datos de una categoria');
}

//Delete Category
export const httpDeleteCategory = (request,response)=> {
    response.send('Aquí puedes eliminar una categoría');
}