import './CategoryCard.styless.scss';

import {Link} from 'react-router';

const CategoryCard = ({category}) => {
    return(
        <section className="categoryCard">
            <button className="category-btn">
                <Link key={category.category_id} to={`categories/${category.category_id}`}>
                        {category.category_name}
                </Link>
            </button>
        </section>
    )
}

export default CategoryCard;