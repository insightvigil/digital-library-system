import { useEffect,useState } from "react";
import './BookCard.styles.scss';
import { useNavigate } from "react-router";

function BookCard({book}){
    
    const {author, cover_url, stock, title, book_id} = book;
    const navigate = useNavigate()
    
    return(
        <div className="book-card__container" onClick={()=> { navigate(`/books/${book_id}`)}}>  
                <figure className="book" >
                    <img className="book__img" src={cover_url} alt=""/> 
                    <figcaption className="book__meta">
                        <h4 className="title">{title}</h4>
                        <p className="author">{author}</p>
                        {stock > 0 && <p className="available">Disponible</p>}
                    </figcaption>
                    
                </figure>
        </div>
    )
}

export default BookCard;