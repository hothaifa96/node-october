import React from 'react';
import { useState,useEffect } from "react";
import axios from "axios";

const Animals = () => {
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

export default Animals;
    