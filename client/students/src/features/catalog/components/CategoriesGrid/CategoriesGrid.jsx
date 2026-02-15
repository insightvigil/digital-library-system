import CategoryCard from '../CategoryCard/CategoryCard.component';
import './CategoriesGrid.styles.scss'
import { useState } from 'react';

const CategoriesGrid = ({categories = []}) => {

    
    return(
        <>  
        <section className="categories-grid">
            {/* Botón anterior */}
            <button className="nav-btn left" onClick={""} disabled={""}>
                &lt;
            </button>

            {/* Lista de categorías visibles */}
            <div className="categories-wrapper">
                {categories.map((category) => (
                    <CategoryCard key={category.category_id} category={category}/>
                ))}
            </div>
            

             {/* Botón siguiente */}
            <button className="nav-btn right" onClick={""} disabled={""} >
                &gt;
            </button>

            </section>
        </>
    )
}

export default CategoriesGrid;