import {pool} from '../db/pool.js'

export async function getBooks(){
    const response = await pool.query('SELECT * FROM books');
    return response.rows
}


export async function getBook(id){
    const response = await pool.query('SELECT * FROM books WHERE id = $1 ',[id]);

    return response.rows;
}
