
import BookCard from '../../components/BookCard/BookCard.component';

import './CategoryGrid.styles.scss'
function CategoryGrid({books}){ 
    return (
        
        <div className='category__container'>
            {books.map((book) => {
            return <BookCard key={book.book_id}book={book}/>
            })}
        </div>
    )
}
export default CategoryGrid;