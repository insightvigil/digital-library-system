import './BookGrid.styles.scss'
import BookCard from '../BookCard/BookCard.component'

function BookGrid({booksByCategory}) {
  return (
    <section className="bookgrid-container">
      {/* Botón anterior */}
      <span
        className="nav-btn left"
        onClick={""}
        aria-disabled={""}
      >
        &lt;
      </span>

      {/* Lista de libros visibles */}
      <div className="books-wrapper">
        {booksByCategory.map((book)=> {
          return <BookCard key={book.book_id} book={book}/>
        })}
      </div>

      {/* Botón siguiente */}
      <span
        className="nav-btn right"
        onClick={""}
        aria-disabled={""}
      >
        &gt;
      </span>
    </section>
  )
}

export default BookGrid;
