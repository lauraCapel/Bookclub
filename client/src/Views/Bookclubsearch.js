import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Bookclubsearch(props) {
    
    // store result request in state
    // in return
    // to map bookclubs and display
    

    return (
        <div className='Bookclubsearch'>
            <h2>My Bookclubs</h2>
            {/* <div className="search">
                <label>
                <input
                    type="text"
                    name="extra_pic"
                    value={item.extra_pic}
                    onChange={handleInputChange}
                />
                </label>
                
            </div> */}


            <ul>
                {props.bookClubs.map((bc) => (
                    <li className="navlink" key={bc.id}>
                        <Link to={"/Bookclub/"+bc.id}>{bc.name}</Link>
                    </li>
            ))}
            </ul> 
            {/* <Link to="/Bookclub/:id">{bookClub.name}</Link> */}
        </div>
    )
}

