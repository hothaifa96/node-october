import React from 'react';

const Display = ({message}) => {
    
    return (
        <div style={{background:'white' , width:'30vw',height:'50vh' ,color:'tomato'}}>
            {<h1>{message}</h1>}
        </div>
    );
}

export default Display;
