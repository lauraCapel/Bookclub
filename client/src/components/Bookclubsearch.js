import React from 'react'
import { Link } from 'react-router-dom';

export default function Bookclubsearch() {
    // make sure intital state is an empty array
    const [bookClubs, setBookClubs] = useState([])
    // state to store list of bookclubs
    // fetch bookclub back end
    // store result request in state
    // in return
    // to map bookclubs and display

    return (
        <div>Bookclubsearch
        
        <Link to="/Bookclub/:id">Bookclub</Link>
        </div>
    )
}
