// import BreadCrumbs from "../../components/navigation/BreadCrumbs/BreadCrumbs.component";
import BookLocationInfo from '../../components/BookLocationInfo/BookLocationInfo'
import BookDetailsInfo from '../../components/BookDetailsInfo/BookInfoDetails'
import BreadCrumbs from '../../../../shared/components/BreadCrumbs/BreadCrumbs.component';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './BookDetail.styles.scss'

function BookDetail() {

  const [book, setBook] = useState([]);
  const {id} = useParams();

  useEffect(()=> { 
    const fetchBook = async function(){
      try{
        const response = await fetch(`http://localhost:8000/books/${id}`);
        if(!response.ok) {
          throw new Error('Error al cargar los datos del libro')
        }
        const data = await response.json();
        setBook(data);
      } catch(error){
        console.error(`${error.name} ${error.message}`);
      }
      
    }
    fetchBook();
  },[]);

  return (
    <section className="bookdetail">
      <div className="breadcrumbs">
        <BreadCrumbs  book={book} /> 
      </div>

      <div className="bookdetail__data">

        <div className="left__cover">
            <img src={book.cover_url} alt={book.title} className='cover'/>
        </div>

        <div className="right__data">
          <div className="title-block">
            <h2>{book.title}</h2>
            <p>{book.author}</p>
          </div>
          
          <BookDetailsInfo book={book} />
          <BookLocationInfo book={book} /> 
          
        </div>

      </div> 
    </section>
  );
}

export default BookDetail;