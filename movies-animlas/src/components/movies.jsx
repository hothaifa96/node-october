import userEvent from '@testing-library/user-event';
import axios from 'axios';
import React from 'react';
import { useState,useEffect } from 'react';

const Movies = () => {
    const [list, setlist] = useState([]);

    useEffect(() => {
        async function getlist(){
            const l= await axios.get('https://jsonplaceholder.typicode.com/users')
            setlist(l.data);
        }
        getlist();
    },[]);
    
    return (
        <div>
            <ul>
                {list.map(movie => <li key={movie.id}>{movie.name}</li>)}
            </ul>
        </div>
    );
}

export default Movies;
