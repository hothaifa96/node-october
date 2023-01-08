import userEvent from '@testing-library/user-event';
import axios from 'axios';
import React from 'react';
import { useState,useEffect } from 'react';

const Movies = () => {
    const [list, setlist] = useState([]);

    useEffect(() => {
        async function getlist(){
            const l= await axios.get('http://localhost:3030/api/movies')
            console.log(l.data);
            setlist(l.data);
        }
        getlist();
    },[]);
    
    return (
        <div>
            <ul>
                {list.map(animal => <li key={animal.id}>{animal.name}</li>)}
            </ul>
        </div>
    );
}

export default Movies;
