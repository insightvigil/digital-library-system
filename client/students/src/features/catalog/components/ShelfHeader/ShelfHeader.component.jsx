import { Link } from 'react-router';

import './ShelfHeader.styles.scss'


const ShelfHeader = ({category}) => {
    
    return (
        <>
        <section className="shelfheader-container">
            <div className="shelfheader-description">
                <h2>{category.category_name}</h2>
                <p>{category.category_description}</p>
            </div>      
                <div className='shelfheader-link'>
                    {category.category_id && <Link to={`/categories/${category.category_id}`}>Ver todo</Link> }
                </div>
        </section>
            
        </>
    )
}

export default ShelfHeader;