import BookGrid from "../BookGrid/BookGrid.component";
import ShelfHeader from "../ShelfHeader/ShelfHeader.component";

import { useState, useEffect } from "react";

import './BookShelf.styles.scss'



const BookShelf = ({category, booksByCategory}) => {
    const {category_id, category_name, description} = category;
    

    return (
        <section className="bookshelf-container">    
            <ShelfHeader category={category || null}/>
            <BookGrid booksByCategory={booksByCategory}></BookGrid>
        </section>
        
    )
}

export default BookShelf;