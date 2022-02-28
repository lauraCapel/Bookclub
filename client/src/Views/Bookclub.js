import React from 'react'
import { Link, useParams } from 'react-router-dom';

import Book from './Book';
import Error404View from './Error404View';

export default function Bookclub(props) {
    let { id } = useParams();  // get user ID from URL
    let bookClub = props.bookClubs.find(bc => bc.id === Number(id));
    console.log(bookClub);
    if (!bookClub) {
        return <Error404View />;
    }
    let book = props.books.find(b => b.id === bookClub.current_book);
    if (!book) {
        return <Error404View />;
    }

    

    return (
        <div className='BookClubView'>
            <h2>{bookClub.name} </h2>
            <p>This month we are reading:</p>
            <h3>{book.name}</h3>
            <p>by: {book.author}</p>
            <Link to={"/Book/"+book.id}>
                <img src={book.cover} alt="display image"></img>
            </Link>
            {/* <img src={book.cover} alt="display image"></img> */}


            {/* <Book /> */}
            <Link to="/Bookclubs">back</Link>
        
        </div>
    )
}
