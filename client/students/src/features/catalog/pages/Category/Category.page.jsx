import { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router';
import BreadCrumbs from '../../../../shared/components/BreadCrumbs/BreadCrumbs.component';
import CategoryHeader from '../../components/CategoryHeader/CategoryHeader.component';
import CategoryGrid from '../../components/CategoryGrid/CategoryGrid.component';
import CategoryFilters from '../../components/CategoryFilters/CategoryFilters.component';

import './Category.styles.scss';

export default function CategoryBooksPage() {
  const { id } = useParams();
  let [booksByCategory, setBooksByCategory] = useState([]);

  useEffect(()=>{
      const fetchBooksByCategory = async () => {
        try{
          const response = await fetch(`http://localhost:8000/books/categories/${id}`);
          if(!response.ok){
            throw new Error('Fallo al obtener los datos');
          }
        const data = await response.json();
        setBooksByCategory(data);
        } catch(error) {
          console.error(error.name + " " + error.message);
        }
        
      } 
      fetchBooksByCategory();
    },[])

    

  return (
    <>
    
      

      <section className="books-by-category__container">
        <BreadCrumbs book={{}} />
        <CategoryHeader  />
        <CategoryFilters/>
        <CategoryGrid  books={booksByCategory}/>


      

        
      </section>
    </>
  );
}
