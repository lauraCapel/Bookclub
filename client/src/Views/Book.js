import React from 'react'
import { Link, useParams } from 'react-router-dom';


import Error404View from './Error404View';

export default function Book(props) {
    let { id } = useParams();  // get user ID from URL
    let book = props.books.find(b => b.id === Number(id));
    // let book = {name: "Meena"}

    if (!book) {
        return <Error404View />;
    }

    return (

        
        <div className='BookView'>
            
            <div className="card mb-3" style={{ maxWidth: "640px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <a href={book.gr_URL} target="_blank" rel="noopener noreferrer" >
                        <img src={book.cover} className="img-fluid rounded-start" alt="display image"></img>
                        </a>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">{book.name} </h3>
                            <p className="card-text">Author: {book.author}</p>
                            <p className="card-text">Rating: {book.rating}</p>
                        </div>
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <p><a href={book.gr_URL} className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer" >GoodReads</a></p>
                        </div>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <Link key="back" to="/Books"  className="btn btn-dark">back</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
