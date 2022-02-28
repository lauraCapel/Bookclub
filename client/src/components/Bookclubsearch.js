import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Bookclubsearch(props) {
    
    // store result request in state
    // in return
    // to map bookclubs and display

    return (
        <div className='Bookclubsearch'>
        Bookclubsearch
            {props.bookClubs.map((bookClub) => (
                <div className="bookclub-preview" key={bookClub.id}>
                    <td>
                        <Link to="/Bookclub/:id">{bookClub.name}</Link>
                    </td>
                    
                    <p>category</p>
                    <p>num_members</p>
                </div>
            ))}
            {/* <Link to="/Bookclub/:id">{bookClub.name}</Link> */}
        </div>
    )
}

