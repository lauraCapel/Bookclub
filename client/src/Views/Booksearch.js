import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Bookclubsearch(props) {
    
    // store result request in state
    // in return
    // to map bookclubs and display
    

    return (
        <div className='Bookclubsearch'>
            <h2>Book search</h2>
            <ul>
                {props.books.map((bc) => (
                    <li className="book-preview" key={bc.id}>
                        <Link to={"/Book/"+bc.id}>{bc.name}</Link>
                    </li>
            ))}
            </ul> 
            {/* <Link to="/Bookclub/:id">{bookClub.name}</Link> */}
        </div>
    )
}

