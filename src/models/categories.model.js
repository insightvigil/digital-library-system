import { response } from "express";
import { pool } from "../db/pool.js";

export async function createCategory(category){
    if(!category.description){
        await pool.query( `INSERT INTO categories(name, description) VALUES ($1, DEFAULT);`, [category.name]);
    } else {
        await pool.query( `INSERT INTO categories(name, description) VALUES ($1, $2);`, [category.name, category.description]);
    }
    
}

export async function getCategories(limit){
    if(!limit){
        const response = await pool.query('SELECT id AS category_id, name as category_name, description FROM categories ORDER BY name ASC');
        return response.rows;
    } else {
        const response = await pool.query('SELECT id AS category_id, name as category_name, description FROM categories ORDER BY name ASC LIMIT $1', [limit]);
        return response.rows;
        
    }
} 

export async function getCategory(id){
    const response = await pool.query('SELECT * FROM categories WHERE id = $1', [id]);
    
    return response.rows;
}

//Extras

