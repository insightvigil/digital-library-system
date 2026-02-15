import BookShelf from '../../components/BookShelf/BookShelf.component';
import CategoriesShelf from '../../components/CategoriesShelf/CategoriesShelf.component'

import { useState, useEffect } from "react";

import './Home.styles.scss'



const Home = () => {

    const [categories, setCategories] = useState([]);
    const [booksByCategory, setBooksByCategory] = useState({});
    const [shelfCategories, setShelfCategories] = useState([]);
    
    //Carga de categorias 
    useEffect(() => {
        const fetchCategories = async () => {

            try{
                const response = await fetch('http://localhost:8000/categories');
                if(!response.ok){
                    throw new Error('Error al cargar los datos') 
                }
                const data = await response.json();
                setCategories(data);
            } catch(error) {
                console.log(error.name +": "+ error.message);
            }
        };

        fetchCategories();
    }, []);

    //Carga de categorias para el shelf
    useEffect(()=> {
        const fetchCategoriesShelf = async ()=> {
            try{
                const response = await fetch('http://localhost:8000/categories?limit=7');
                if(!response.ok) throw new Error('Error al cargar los datos')
                const data = await response.json();
                setShelfCategories(data);
            } catch(error){
                console.error(error.name + ": " + error.message);
            }
            
        } 
        fetchCategoriesShelf();
    })

    //Carga de libros por categoria (caso Grids)
    useEffect(() => {
        if (!categories.length) return;

        const fetchBooks = async () => {
            const result = {};

            try {for (const category of categories) {
            const response = await fetch(
                `http://localhost:8000/books/grid/${category.category_id}`
            ); if(!response.ok) throw new Error('Error al cargar los datos');

            const data = await response.json();

            result[category.category_id] = data; // <- aquí va data
            }
            setBooksByCategory(result); 
            } catch(error) {
                console.error(error.name + ": " + error.message);
            }
        };

        fetchBooks();
    }, [categories]);

    return (
        
        <div className="home">
            <CategoriesShelf categories={shelfCategories}/>
            {categories.map( (category)=> {
                return <BookShelf key={category.category_id} category={category} booksByCategory={booksByCategory?.[category.category_id] ?? []}></BookShelf>
            })}
        
        </div>
    )
}

export default Home;