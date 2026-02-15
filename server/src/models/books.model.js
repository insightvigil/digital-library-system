import {pool} from '../db/pool.js'


export async function createBook(book){
    await pool.query(`INSERT INTO books (title) VALUES ($1);`,[book.title]);
}

export async function getBooks(){
    const response = await pool.query('SELECT * FROM books');
    return response.rows
}

export async function getBooksByCategory(category_id){
    const response = await pool.query(`
        SELECT 
        b.id AS book_id, 
        b.title,
        b.author,
        b.cover_url,
        b.stock,
        c.id AS category_id, 
        c.name AS category_name  
        FROM books as b  JOIN categories as c ON b.category_id = c.id WHERE category_id = $1`, [category_id]);
    return response.rows;
}


export async function getBook(id){
    const response = await pool.query('SELECT * FROM books WHERE id = $1 ',[id]);
    
    return response.rows[0];
}

export async function getBooksGrid(id){
    const response = await pool.query(
        `SELECT 
        b.id AS book_id, 
        b.title,
        b.author,
        b.cover_url,
        b.stock,
        c.id AS category_id, 
        c.name AS category_name 
        
        FROM books as b
        
        JOIN categories as c
        ON b.category_id = c.id
        
        WHERE c.id = $1
        ORDER BY b.title

        LIMIT 5
        ;`, [id]
    )

    return response.rows;
}



